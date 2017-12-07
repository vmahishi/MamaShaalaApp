import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C5BCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

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