import React, { useContext } from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/acitivityStore";
import { Link } from "react-router-dom";


const ActivityList: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {activitiesByDate, deleteActivity,submitting,target} = activityStore;
  return (
    <Segment clearing>
      <Item.Group divided>
        {activitiesByDate.map((activitie) => (
          <Item key={activitie.id}>
            <Item.Content>
              <Item.Header as="a">{activitie.title}</Item.Header>
              <Item.Meta>{activitie.date}</Item.Meta>
              <Item.Description>
                <div>{activitie.description}</div>
                <div>{activitie.venue}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  name={activitie.id}
                  as={Link} to={`/activities/${activitie.id}`}
                  floated="right"
                  content="View"
                  color="blue"
                ></Button>
                <Button
                  name={activitie.id}
                  loading={target === activitie.id && submitting}
                  onClick={(e) => deleteActivity(e, activitie.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                ></Button>
                <Label basic content={activitie.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
          // <List.Item key={activitie.id}>{activitie.description}</List.Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
export default observer(ActivityList);
