import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles';

  class Profile extends Component{
      render(){
          return(
              <View style={styles.container}>
                  <Text>
                      This is the Profile page
                      </Text>
                      </View>
          );
      }
  }

  export default Profile;