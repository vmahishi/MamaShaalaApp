import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import Tabbar from 'react-native-tabbar-bottom';
import Attendance from '../attendance';
import Results from '../results';
import TimeTable from '../timetable';
import Profile from '../profile';

  class Inbox extends Component{
    constructor(props){
      super(props);
      this.state = {
        page: "Inbox"
      };
    }
    render(){
        return(
            <View style={styles.container}>
              {this.state.page === "Profile" && <Profile />}
            {this.state.page === "Attendance" && <Attendance />}
            {this.state.page === "TimeTable" && <TimeTable />}
            {this.state.page === "Results" && <Results />}
            <Tabbar
            stateFunc={(tab) => {
              this.setState({page: tab.page})
            }}
            activePage={this.state.page}
            tabs={[
              {
                  page: "Profile",
                  icon: "person",
                },
              {
                page: "Inbox",
                icon: "archive",
              },
              {
                page: "Attendance",
                icon: "hand",
              },
              {
                page: "TimeTable",
                icon: "calendar",
              },
              {
                page: "Results",
                icon: "stats",
              },
            ]}
          />
          </View>
        );
    }
  }

  export default Inbox;