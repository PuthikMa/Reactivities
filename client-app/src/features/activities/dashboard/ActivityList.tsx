import React from "react";
import { Item, Button, Label, Segment  } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityList: React.FC<IProps> = (props) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {props.activities.map((activitie) => (
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
                  onClick={() => props.selectActivity(activitie.id)}
                  floated="right"
                  content="View"
                  color="blue"
                ></Button>
                <Button
                  onClick={() => props.deleteActivity(activitie.id)}
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
