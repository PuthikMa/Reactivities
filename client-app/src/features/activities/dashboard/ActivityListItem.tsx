import React from "react";
import { Item, Button,Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { IActivity } from "../../../app/models/activity";

const ActivityListItem: React.FC<{ activitie: IActivity }> = ({
  activitie,
}) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
        <Item>
          <Item.Image size="tiny" circular src="/assets/user.png" />
          <Item.Content>
            <Item.Header as="a">{activitie.title}</Item.Header>
            <Item.Description>Hosted by Bob</Item.Description>
          </Item.Content>
        </Item>
        </Item.Group>

      </Segment>
      <Segment>
        <Icon name="clock" /> {activitie.date}
        <Icon name="marker" /> {activitie.venue}, {activitie.city}
      </Segment>
      <Segment secondary>Attendees will go here</Segment>
      <Segment clearing>
        <span>{activitie.description}</span>
        <Button
          name={activitie.id}
          as={Link}
          to={`/activities/${activitie.id}`}
          floated="right"
          content="View"
          color="blue"
        ></Button>
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
