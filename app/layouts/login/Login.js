import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Icon,
  Text,
  Button,
} from 'native-base';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TextField from '../../components/TextField';
import styles from './styles';
import { authenticate } from '../../redux/reducers/users';

const mapDispatchToProps = {authenticate};

const validateMobileNumber = form => {
  let errorMessage = '';
  if (form.mobileNumber.includes(' ')){
    errorMessage = 'Mobile Number cannot contain spaces';
    return errorMessage;
  }
  if (form.mobileNumber === ''){
    errorMessage = 'Mobile Number field must be filled';
    return errorMessage;
  }
  if(form.mobileNumber.length !== 10){
    errorMessage = 'Invalid Mobile Number'
    return errorMessage;
  }
}

const validateOtpNumber = form => {
  let errorMessage = '';
  if (form.otp.includes(' ')){
    errorMessage = 'OTP cannot contain spaces';
    return errorMessage;
  }
  if (form.otp === ''){
    errorMessage = 'OTP field must be filled';
    return errorMessage;
  }
  if (form.otp.length !== 6){
    errorMessage = 'OTP should be 6 digits';
    return errorMessage;
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      otp:'',
      error: '',
    };
  }

  onMobileNumberSubmit(){
    const error = validateMobileNumber(this.state);
    if (error) {
      this.setState({ error })
    }
    else{
      this.setState({error:''});
    }
  }

  onOtpSubmit(){
    const error = validateOtpNumber(this.state);
    if (error) {
      this.setState({ error })
    } else {
    this.login();
    }
  }

  login(){
    let value = this.props.authenticate(this.state)
        if (value === 'Invalid Mobile Number'){
          this.setState({
            error: value,
            mobileNumber: '',
          })
        } else {
          Actions.inbox();
        }
  }

  render(){
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.formMsg}>{this.state.error}</Text>
          <Icon
            style={styles.icon}
            ios="ios-happy-outline"
            android="md-happy"
          />
          <View style={styles.loginBox}>
            <TextField
            name="Enter Mobile Number"
            value={this.state.mobileNumber}
            onChangeText={(text) => this.setState({mobileNumber: text})}
            />
          <Button
            block
            style={styles.button}
            onPress={() => this.onMobileNumberSubmit()}
          >
            <Text>Send OTP</Text>
          </Button>
          </View>
          <View style={styles.loginBox}>
            <TextField
            name="Enter OTP"
            value={this.state.otp}
            onChangeText={(text) => this.setState({otp: text})}
            />
          <Button
            block
            style={styles.button}
            onPress={() => this.onOtpSubmit()}
          >
            <Text>Verify</Text>
          </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);