import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';
import {View} from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Thumbnail,
  Icon
} from 'native-base';
import axios from 'axios';

import TextField from '../../components/TextField';
import styles from './styles';
import { addUser } from '../../redux/reducers/users';
import cosmicConfig from '../../config/cosmic';

const mapDispatchToProps = {addUser};

const validate = form => {
  let errorMessage = '';
  if (form.mobileNumber.includes(" ")){
    errorMessage = "Mobile Number cannot contain spaces";
  }
  Object.keys(form).slice(0, 5).map(field => {
    if (!form[field]){
      errorMessage = 'Mobile Number must be entered';
    }
  })
  return errorMessage;
}

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName:'',
      lastName:'',
      mobileNumber: '',
      otp:'',
      error: '',
    };
  }

  onSubmit(){
    const error = validate(this.state);
    if (error) {
      this.setState({ error })
    } else {
      this.checkMobileNumber(this.state.mobilenumber);
    }
  }

  checkMobileNumber(mobileNumber){
    axios.get(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/object-type/users/search?metafield_key=username&metafield_value=${username}`)
    .then(res => res.data)
    .then(data => {
      if (data.objects) {
        this.setState({ error: 'Mobile Number already registered'})
      } else {
        this.props.addUser(this.state);
      }
    })
  }

  render(){
    return (
      <Container style={styles.container}>
        <Content>
          <Form style={styles.mar10}>
          <TextField
              name="First Name"
              type="big"
              value={this.state.firstName}
              onChangeText={(text) => this.setState({firstName: text})}
            />
            <TextField
              name="Last Name"
              type="big"
              value={this.state.lastName}
              onChangeText={(text) => this.setState({lastName: text})}
            />
            <TextField
              name="Mobile Number"
              value={this.state.mobileNumber}
              onChangeText={(text) => this.setState({mobileNumber: text})}
            />
          </Form>
          <Button
            block
            style={styles.mar10}
            onPress={() => this.onSubmit()}
          >
            <Text>Send OTP</Text>
          </Button>
          <Text style={styles.formMsg}>{this.state.error}</Text>
          
          <Form style={styles.mar10}>
            <TextField
              name="Enter OTP"
              value={this.state.otp}
              onChangeText={(text) => this.setState({otp: text})}
            />
          </Form>
          <Button
            block
            style={styles.mar10}
            onPress={() => this.onSubmit()}
          >
            <Text>Verify</Text>
          </Button>
          <Text style={styles.formMsg}>{this.state.error}</Text>
          <Button
            transparent
            style={styles.loginBtn}
            onPress={() => Actions.login()}
          >
            <Text style={styles.loginTxt}>Already have an account?</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Signup);