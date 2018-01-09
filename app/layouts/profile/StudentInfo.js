import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Button from 'apsl-react-native-button';
import styles from './styles';

export default class StudentInfo extends Component{

    constructor(props){
        super(props)
        this.state = {text: ''};
    }

    handleButtonPress(){
        alert("Profile Updated!");
    }
    render(){
        let {phone} = this.state,
         {studentName}=this.state,
         {studentClass}=this.state,
         {bloodGroup}=this.state,
         {parentName}=this.state,
         {email}=this.state,
         {sibling}=this.state,
         {siblingClass}=this.state,
         {address}=this.state;
        
        return(
            <View style={styles.studentInfo}>
                <TextField 
                label='Student Name'
                value={studentName}
                onChangeText={(studentName)=>this.setState({studentName})}
                />

                 <TextField 
                    label='Class'
                    value={studentClass}
                    onChangeText={(studentClass)=>this.setState({studentClass})}
                />

                <TextField 
                    label='Blood Group'
                    value={bloodGroup}
                    onChangeText={(bloodGroup)=>this.setState({bloodGroup})}
                />

                <TextField 
                    label='Parent Name'
                    value={parentName}
                    onChangeText={(parentName)=>this.setState({parentName})}
                />

                <TextField 
                    label='Phone Number'
                    value={phone}
                    onChangeText={(phone)=>this.setState({phone})}
                />

                <TextField 
                    label='E mail'
                    value={email}
                    onChangeText={(email)=>this.setState({email})}
                />

                <TextField 
                    label='Sibling Studying in the school'
                    value={sibling}
                    onChangeText={(sibling)=>this.setState({sibling})}
                />

                <TextField 
                    label='Class'
                    value={siblingClass}
                    onChangeText={(siblingClass)=>this.setState({siblingClass})}
                />

                <TextField 
                    label='Address'
                    value={address}
                    onChangeText={(address)=>this.setState({address})}
                /> 

                <Button 
                style={{backgroundColor: '#3e9cd3'}} 
                textStyle={{fontSize: 18}}
                onPress={()=> this.handleButtonPress()}>
                
                Save
              </Button>
             </View>
        );
    }
}