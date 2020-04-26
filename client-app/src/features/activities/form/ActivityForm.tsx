import React, { useState, FormEvent } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import {v4 as uuid} from 'uuid';

interface IProps {
  setEditMode: (setEditMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}
export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initializeFormState,
  createActivity,
  editActivity
}) => {
  const initializeForm = () => {
    if (initializeFormState) {
      return initializeFormState;
    } else {
      return {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleSubmit= () => {
    console.log(activity);
  
    if(activity.id.length === 0){
      let newActivity ={
        ...activity,
        id: uuid()
      }
      createActivity(newActivity);
    }else{
      editActivity(activity);
    }
  }
  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
