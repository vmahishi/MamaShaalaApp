import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles';

  class Attendance extends Component{
      render(){
          return(
              <View style={styles.container}>
                  <Text style={styles.welcome}>
                      This is the Attendance page
                      </Text>
                      </View>
          );
      }
  }

  export default Attendance;