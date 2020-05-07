import React, { useState, FormEvent, useContext, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { v4 as uuid } from "uuid";
import ActivityStore from "../../../app/stores/acitivityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";

interface DetailParams {
  id: string;
}
const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({match,history}) => {
  const activityStore = useContext(ActivityStore);
  const {
    createActivity,
    editActivity,
    submitting,
    activity: initializeFormState,
    loadActivity,
    clearActivity
  } = activityStore;
 


  const [activity, setActivity] = useState<IActivity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });
  useEffect(() => {
    if(match.params.id && activity.id.length === 0){
      loadActivity(match.params.id).then(() => initializeFormState && setActivity(initializeFormState));
    }
    return () => {
      clearActivity()
    }
  },[loadActivity,clearActivity,match.params.id,initializeFormState, activity.id.length]);

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(()=> history.push(`/activities/${newActivity.id}`));
    } else {
      editActivity(activity).then(()=> history.push(`/activities/${activity.id}`));
    }
  };
  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          placeholder="Titile"
          value={activity.title}
          name="title"
        />
        <Form.TextArea
          onChange={handleInputChange}
          placeholder="Descriiption"
          value={activity.description}
          name="description"
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder="Category"
          value={activity.category}
          name="category"
        />
        <Form.Input
          onChange={handleInputChange}
          type="datetime-local"
          placeholder="Date"
          value={activity.date}
          name="date"
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder="City"
          value={activity.city}
          name="city"
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder="Veneu"
          value={activity.venue}
          name="venue"
        />
        <Button
          loading={submitting}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          loading={submitting}
          onClick={() => history.push('/activities')}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
export default observer(ActivityForm);