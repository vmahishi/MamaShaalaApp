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

const validate = form => {
  let errorMessage = '';
  if (form.mobileNumber.includes(' ')){
    errorMessage = 'Mobile Number cannot contain spaces';
  }
  if (form.mobileNumber === ''){
    errorMessage = 'Mobile Number field must be filled';
  }
  return errorMessage;
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      error: '',
    };
  }

  onSubmit(){
    const error = validate(this.state);
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
          Actions.notifications();
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
            onPress={() => this.onSubmit()}
          >
            <Text>Log in</Text>
          </Button>
          </View>
          <Button
            transparent
            style={styles.signupBtn}
            onPress={() => Actions.signup()}>
            <Text style={styles.signupTxt}>Sign up for an account</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);