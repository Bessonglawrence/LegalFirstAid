import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  CheckBox
} from 'react-native';

import firebase from 'react-native-firebase'
import {Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import 
  Modal, 
{ ModalTitle, 
  SlideAnimation, 
  ModalContent } 
  from 'react-native-modals';
import {posts, lawTypes} from './../../../res/data.js';
import {Feeds, ScrollItems} from './../../sections'


import styles from './Home.style';
import { TnC } from './../../components';
var Parse = require('parse/react-native');



export default class Home extends Component {

    constructor(props) {
      super(props);
        
      this.state = {
        posts : [],
        visible : false,
        lawTypes : lawTypes
      };
        this.postsRef = firebase.database().ref('posts');

    }


    toggleModal(visible){
      this.setState({visible: visible})
    }

    componentDidMount(){

      // this.postsRef.once('value', snap => {
      //     let posts = _obj2Arr(snap.val());
      //     // console.log(posts)
      //     this.setState({posts: posts})
      // }); 

      // GET - RETRIEVE DATA
  		let query = new Parse.Query('Post');
  		query.find()
  			.then(posts => {
  				console.warn(posts);
  				//this.setState({posts: posts})
  			})
  			.catch(err => {
  				alert('Failed to load posts with message ' + err.message);
  			})
      
    }

  	render() {
      const {posts, lawTypes}= this.state;
      return (
          <View style={styles.container}>
            <ScrollView 
              contentContainerStyle={{alignItems:'center', justifyContent: 'center', backgroundColor: '#00a8ff', height: 60, marginBottom: 25}}
              horizontal = {true}
              showsHorizontalScrollIndicator={false}
            >
                {lawTypes.map((lawType, key)=> <ScrollItems key={key} lawType={lawType} /> )}
            </ScrollView>

            <ScrollView>
              {posts.map((post, key)=> <Feeds key={key} post={post} /> )}
            </ScrollView>

            <ActionButton
              buttonColor="#00a8ff"
              size={60}
              buttonText="Asks"
              position="right"
              onPress={() => this.toggleModal(true)}
            />

            <Modal
              visible={this.state.visible}
              modalTitle={<ModalTitle style={{backgroundColor: '#00a8ff',}} textStyle={{fontSize: 20, color: 'white'}} title="Post a question" />}
              overlayBackgroundColor="#000000"
              modalAnimation={new SlideAnimation({
                slideFrom: 'bottom',
                useNativeDriver: true,
                initialValue: 0
              })}
              onTouchOutside={() => this.toggleModal(!this.state.visible)}
              onSwipeOut={() => this.toggleModal(!this.state.visible)}
            >
              <ModalContent style={styles.modalContent}>
                <Text style={styles.typeQuestion}>Type your question</Text>
                <View style={styles.inputView}>
                  <TextInput
                    placeholder="Type ..."
                    numberOfLines={5}
                    multiline={true}
                    maxHeight={80}
                    style={styles.inputStyle}
                    placeholderTextColor='white'
                    selectionColor='white'
                  /> 
                </View>
                <TouchableOpacity style={styles.postButton}>
                  <Text style={{color: 'white', fontSize: 20}}>Post</Text> 
                </TouchableOpacity>
                <View style={{marginTop: 40, flexDirection: 'row'}}> 
                  <CheckBox />
                  <View style={{marginTop: 3}}> 
                    <Text style={{color:'grey', paddingRight: 35}}>
                      By checking this box you agree to the terms and conditions of this app.
                      You can read them by clicking on the hot link below.
                    </Text>
                    <TnC />
                  </View>
                </View>
              </ModalContent>
            </Modal>

      		</View>
    	);
  	}
}