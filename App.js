import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import Router from './app/config/routes.js';
import { Font, AppLoading } from 'expo';
import store from './app/redux/store';
// import Tabbar from 'react-native-tabbar-bottom';


export default class MamaShaalaApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {isReady:false};
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({isReady: true});
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }   
    return (
      // <View style={styles.container}>
      //   {this.state.page === "Home" && <Home />}
      //   {this.state.page === "Profile" && <Profile />}
      //   {this.state.page === "Attendance" && <Attendance />}
      //   {this.state.page === "TimeTable" && <TimeTable />}
      //   {this.state.page === "Results" && <Results />}


      //   <Tabbar
      //     stateFunc={(tab) => {
      //       this.setState({page: tab.page})
      //     }}
      //     activePage={this.state.page}
      //     tabs={[
      //       {
      //         page: "Home",
      //         icon: "home",
      //       },
      //       {
      //         page: "Profile",
      //         icon: "person",
      //       },
      //       {
      //         page: "Attendance",
      //         icon: "hand",
      //       },
      //       {
      //         page: "TimeTable",
      //         icon: "calendar",
      //       },
      //       {
      //         page: "Results",
      //         icon: "stats",
      //       },
      //     ]}
      //   />
      // </View>
      <Provider store={store}>
      <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});