'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Input } from './../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';

//import styles from './Login.style';


class Login extends Component {


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
      		<Text style={{alignSelf: 'center', color: 'grey', marginTop: 130, fontSize: 29, fontStyle: 'italic'}}>Welcome!</Text>
      		<Text style={{fontSize: 17, color: 'grey', fontStyle: 'italic'}}>Hope you find all the answers you need</Text>
      	</View>

      	<View style={{borderTopWidth: 2,width: 60, paddingTop: 5,marginTop: 17, alignSelf: 'center', borderColor: '#00a8ff', }}>
      		<Text style={styles.loginText}>LOGIN</Text>
      	</View>

      	<Input
            selectionColor='#00aeef'
            lable= 'USERNAME'
            placeholder= 'e.g John Doe'
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
      	<View style={{marginTop: 25}}>
	      	<TouchableOpacity style={styles.button}>
	      		<Icon
	      			name="arrow-right" size={35} color='white' 
	      		/>
	      	</TouchableOpacity>
      	</View>

        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 22 }}>
          <Text style={{fontSize: 17, fontStyle: 'italic', paddingTop: 6, color: 'grey'}}>Create a free accout?</Text>
          <TouchableOpacity onPress={()=> Actions.register()}>
            <Text style={{fontSize: 20, fontStyle: 'italic', marginLeft: 5, textDecorationLine: 'underline', color: 'grey'}}>Register</Text>
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
    backgroundColor: '#fafffa'
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
		/*position: 'absolute',
		bottom: 160*/
	},
	introView:{
		alignSelf: 'center',

	}
}


export default Login;