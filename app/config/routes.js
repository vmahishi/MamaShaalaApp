import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Login from '../layouts/login';
import Inbox from '../layouts/inbox';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} title="Login" initial={true} />
    <Scene key="inbox" component={Inbox} title="Inbox" type={ActionConst.REPLACE} hideNavBar />
  </Scene>
);
export default () => (
  <Router scenes={scenes} />
);