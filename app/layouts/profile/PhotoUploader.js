import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Expo from 'expo';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

export default class PhotoUploader extends React.Component {

  state = {
    avatarSource: null,
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 200,
      maxHeight: 200,
      storageOptions: {
        skipBackup: true
      }
    };

    Expo.ImagePicker.launchImageLibraryAsync(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Image style={styles.profilepic} source={require('../../assets/images/placeholder.png')} /> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}