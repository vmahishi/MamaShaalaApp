import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Login from '../layouts/login';
import Notifications from '../layouts/notifications';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} title="Login" initial={true} />
    <Scene key="notifications" component={Notifications} title="Notifications" type={ActionConst.REPLACE} hideNavBar />
  </Scene>
);
export default () => (
  <Router scenes={scenes} />
);