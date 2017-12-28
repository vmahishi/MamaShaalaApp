import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import Router from './app/config/routes';
import { Font, AppLoading } from 'expo';
import store from './app/redux/store';

export default class MamaShaalaApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isReady:false,
    };
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