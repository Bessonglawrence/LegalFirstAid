'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './Feed.style';

import firebase from 'react-native-firebase';

class Feed extends Component {

	constructor(props) {
	  super(props);
    this.state = {
      user : '',
      categories : ''
    }
	}

  componentDidMount() {
    const {user, categories} = this.state;
    this.ref = firebase.database().ref('users').child(this.props.post.postedBy).once('value', snap =>{ 
      let user = snap.val();
      this.setState({user : user})
    })
    /*this.ref = firebase.database().ref('posts/categories').child(this.props.post.categories).once('value', snap =>{
      let categories = _obj2Arr(snap.val());
      //this.setState({categories: categories});
      console.warn(categories)
    })*/
  }

  render() {
  	const {post} = this.props;
    const {user,categories} = this.state;
    return (
      <View>
      <TouchableOpacity activeOpacity={0.8} style={styles.card}>
              <View style={styles.imageSection}>
                <Image
                  source={{uri: user.avatar}}
                  style={styles.image} 
                />
                <View style={{marginLeft: 9}}>
                  <Text style={styles.name}>{user.name}</Text>
                  <Text style={styles.time}>{post.createdAt} || {user.location}</Text>
                </View>
              </View>

              <View>
                { post.question.length > 48 ?
                  <Text style={styles.description}>
                      {(post.question).substr(0, 54)} ...
                  </Text>
                  :
                  <Text style={styles.description}>
                      {post.question}
                  </Text>
                }
                  <Text style={styles.text}>
                    {post.answeredBy.answer}
                  </Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 22,/* borderBottomWidth: 0.5, borderColor: 'lightgrey',*/ paddingBottom: 12, width:'100%' }}>
                <TouchableOpacity style={styles.buttons}>
                  <Text>{post.categories.c1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                  <Text>{post.categories.c2}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                  <Text>{post.categories.c3}</Text>
                </TouchableOpacity>
              </View>

              {/*<View style={styles.statsSection}>
                <View style={styles.stats}>
                  <Text style={styles.statsFigures}>{post.reactions.votes}</Text>
                  <Text style={styles.statsText}>votes</Text>
                </View>

                <View style={styles.stats}>
                  <Text style={styles.statsFigures}>{post.reactions.answers}</Text>
                  <Text style={styles.statsText}>answers</Text>
                </View>

                <View style={styles.stats}>
                  <Text style={styles.statsFigures}>{post.reactions.views}</Text>
                  <Text style={styles.statsText}>views</Text>
                </View>
              </View>*/}
              
            </TouchableOpacity>
            </View>
    );
  }
}

export default Feed;