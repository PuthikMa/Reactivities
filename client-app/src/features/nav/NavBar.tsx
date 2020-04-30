import React, { useContext } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import ActivityStore from "../../app/stores/acitivityStore";
import { observer } from "mobx-react-lite";

 const NavBar:React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item>
              <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
              Reactivities
          </Menu.Item>
          <Menu.Item name="Activities"> </Menu.Item>
          <Menu.Item>
            <Button positive onClick={() =>activityStore.openCreateForm()} content="Create Activity" />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
export default observer(NavBar);