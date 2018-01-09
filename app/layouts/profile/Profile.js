import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PhotoUploader from './PhotoUploader'
import Header from './Header'
import StudentInfo from './StudentInfo'
import ParallaxScroll from 'react-native-parallax-scroll'

  class Profile extends Component{
    render(){
        return(
          <ParallaxScroll
            renderHeader={() => <Header />}
            headerHeight={10}
            isHeaderFixed={false}
            parallaxHeight={10}
            parallaxBackgroundScrollSpeed={5}
            parallaxForegroundScrollSpeed={2.5}
          >
          <PhotoUploader />
          <StudentInfo />
          </ParallaxScroll>
        );
    }
  }

  export default Profile;