import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles';

  class TimeTable extends Component{
      render(){
          return(
              <View style={styles.container}>
                  <Text style={styles.welcome}>
                      This is the TimeTable page
                      </Text>
                      </View>
          );
      }
  }

  export default TimeTable;