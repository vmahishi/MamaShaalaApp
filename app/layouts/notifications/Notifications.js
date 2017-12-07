import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles';

  class Notifications extends Component{
      render(){
          return(
              <View style={styles.container}>
                  <Text>
                      This is the home page
                      </Text>
                      </View>
          );
      }
  }

  export default Notifications;