'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

export default class Settings extends Component {

  onButtonPress (){
    Actions.jump("home")
  }

  render() {
    return (
      <View style={styles.main}>

      	<View style={styles.navBar}>
          <View>
            <View style={{flexDirection: 'row'}}> 
              <TouchableOpacity onPress={()=>this.onButtonPress()}>
                <Icon name="chevron-left" color="white" size={30} />
              </TouchableOpacity>
              <Text style={{fontSize: 18, color: 'white', paddingTop: 3}}>Samantha Jones</Text>
            </View>
            <Text style={{fontSize: 26, color: 'white', paddingLeft: 7, fontStyle: 'italic', fontWeight: 'bold'}}>Settings</Text>
          </View>
          <Image
            source={require('./../../../res/images/samantha.jpeg')}
            style={styles.imageStyle} 
          />
        </View>

        <ScrollView>
          <Text style={{fontSize: 18, color: '#00a8ff', marginTop: 20, fontStyle: 'italic', marginLeft: 23, marginBottom: 7 }}>Account</Text>

        <View style={{backgroundColor: 'white', paddingHorizontal: 7, borderLeftWidth: 4, borderColor: '#00a8ff', paddingVertical: 5, borderRadius: 4, width: '90%', alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Personal Information</Text>
            <Icon name="chevron-right" color="grey" size={24} style={{alignSelf: 'flex-end', marginLeft: 150}}/>
          </View>
          <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Town/City</Text>
          <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Language</Text>
        </View>

        <Text style={{fontSize: 18, color: '#00a8ff', marginTop: 20, fontStyle: 'italic', marginLeft: 23, marginBottom: 7 }}>Privacy and Security</Text>

        <View style={{backgroundColor: 'white', paddingHorizontal: 7, borderLeftWidth: 4, borderColor: 'brown', paddingVertical: 5, borderRadius: 4, width: '90%', alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Private Account</Text>
            <Switch style={{marginLeft: 175}}/>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Activity Status</Text>
            <Switch style={{alignSelf: 'flex-end', marginLeft: 186}}/>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Blocked Accounts</Text>
            <Icon name="chevron-right" color="grey" size={24} style={{alignSelf: 'flex-end', marginLeft: 169}}/>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>linked Accounts   </Text>
            <Icon name="chevron-right" color="grey" size={24} style={{alignSelf: 'flex-end', marginLeft: 170}}/>
          </View>

          <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Privacy and Security help</Text>
        </View>

        <Text style={{fontSize: 18, color: '#00a8ff', marginTop: 20, fontStyle: 'italic', marginLeft: 23, marginBottom: 7 }}>Preferences</Text>

        <View style={{backgroundColor: 'white', paddingHorizontal: 7, borderLeftWidth: 4, borderColor: '#00a8ff', paddingVertical: 5, borderRadius: 4, width: '90%', alignSelf: 'center', marginBottom: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Dark Mode</Text>
            <Switch style={{alignSelf: 'flex-end', marginLeft: 212}}/>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Notifications</Text>
            <Switch style={{alignSelf: 'flex-end', marginLeft: 197}}/>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#00a8ff', marginVertical: 5}}>Swipe Action</Text>
            <Icon name="chevron-right" color="grey" size={24} style={{alignSelf: 'flex-end', marginLeft: 210}}/>
          </View>
        </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
  },

  navBar:{
    backgroundColor: '#00a8ff',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },

  imageStyle:{
    height: 60, 
    width: 60, 
    borderRadius: 30, 
    alignSelf: 'flex-end',
    marginTop: - 59,
  }
});