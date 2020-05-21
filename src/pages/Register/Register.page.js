'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { Input } from './../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';

class Register extends Component {


  render() {
    return (
      <ImageBackground 
        style={styles.mainWrapper}
        source={require('./../../../res/images/water.jpeg')}
        style={{height: '100%', width: 412}}
        blurRadius={1}
        resizeMode='cover'
      >

      	<View style={styles.introView}>
      		<Text style={{alignSelf: 'center', marginTop: 70, color: 'grey', fontSize: 29, fontStyle: 'italic'}}>Welcome!</Text>
      		<Text style={{fontSize: 17, color: 'grey', fontStyle: 'italic'}}>Create a free account and get some assistance</Text>
      	</View>

      	<View style={{borderTopWidth: 2,width: 80, paddingTop: 5,marginTop: 17, alignSelf: 'center', borderColor: '#00a8ff', }}>
      		<Text style={styles.loginText}>REGISTER</Text>
      	</View>

      	<Input
            selectionColor='#00aeef'
            lable= 'USERNAME'
            placeholder= 'e.g John Doe'
      	/>

      	<Input
            selectionColor='#00aeef'
            lable= 'EMAIL'
            placeholder= 'test@gmail.com'
      	/>

      	<Input
      		onFocus
      		secureTextEntry
      		passwordiconlocked="eye-outline"
            passwordiconunlocked="eye-off-outline"
            selectionColor='#00aeef'
            lable= 'PASSWORD'
            placeholder= '*********'
      	/>

      	<Input
      		onFocus
      		secureTextEntry
      		passwordiconlocked="eye-outline"
            passwordiconunlocked="eye-off-outline"
            selectionColor='#00aeef'
            lable= 'CONFIRM'
            placeholder= '*********'
      	/>
      	<View style={{marginTop: 25}}>
	      	<TouchableOpacity style={styles.button}>
	      		<Icon
	      			name="arrow-right" size={35} color='white' 
	      		/>
	      	</TouchableOpacity>
      	</View>

        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 22 }}>
          <Text style={{fontSize: 17, fontStyle: 'italic', paddingTop: 6, color: 'grey'}}>Already have an accout?</Text>
          <TouchableOpacity onPress={()=> Actions.login()}>
            <Text style={{fontSize: 20, fontStyle: 'italic', marginLeft: 5, fontWeight:'bold', textDecorationLine: 'underline', color: 'grey'}}>Login</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    );
  }
}

const styles = {
	mainWrapper:{
		justifyContent:'center', 
		backgroundColor: 'white', 
		flex: 1,
    backgroundColor: '#fafffa',
	},
	loginText:{
		fontSize: 18,
		fontStyle: 'italic',
		color: '#00a8ff',
		alignSelf: 'center',
		
	},
	button:{
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#00aeef', 
		padding: 5,
		width: 60,
		height: 60, 
		borderRadius: 30,
		alignSelf: 'center',
	},
	introView:{
		alignSelf: 'center',

	}
}


export default Register;