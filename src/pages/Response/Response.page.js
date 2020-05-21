'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Response.style';


export default class Response extends Component {
  render() {
    return (
      <View style={styles.container}>

      	<View style={styles.questionCard}>
      		<Text style={{ color: '#b8e994', fontSize: 17}}>Kum Ignatius</Text>
      		<View style={{flexDirection: 'row', paddingTop: 5}}> 
	      		<Text style={{color: 'grey', flex: 5, lineHeight: 20}}>
	      			what do I do if someone I ones knew before, come into my house when I wasn't around
	      			took a bunch of stuff and beats up my little one when they tried to stop him... 
	      		</Text>
	      		<TouchableOpacity style={{flex: 1}}>
	      			<Text style={{fontStyle: 'italic', fontSize: 13, color: 'lightgrey', marginTop: 62}}>Read more</Text>
	      		</TouchableOpacity>
      		</View>
      	</View>

      	<View style={{paddingHorizontal: 20,}}> 

	      	<Text style={{fontWeight: 'bold', color: 'grey', paddingTop: 15, paddingBottom: 5}}>Answer</Text>

	      	<View style={styles.answerCard}>
	      		<Text style={{ color: '#f5cd79', fontSize: 17}}>Barrister Enow Emmanuel</Text>
	      		<Text style={{paddingTop: 5}}>17th December 2019</Text>
	      		<View style={{flexDirection: 'row', paddingTop: 5}}> 
		      		<Text style={{color: 'grey'}}>
		      			It is a very tricky subject if you ask me ... 
		      		</Text>
		      		<TouchableOpacity>
		      			<Text style={{fontStyle: 'italic', fontSize: 13, color: 'lightgrey', marginTop: 2}}>Read more</Text>
		      		</TouchableOpacity>
	      		</View>
	      	</View>

	      	<Text style={{fontWeight: 'bold', color: 'grey', marginTop: 21, paddingBottom: 5}}>Comments</Text>

	      	<View style={{flexDirection: 'row', width: '99%',height: 38, backgroundColor: 'white', alignItems: 'center', elevation: 3, borderRadius: 3, }}>
	      		<Icon name='search' color='grey' size={20} style={{marginLeft: 5}}/>
	      		<TextInput 
	      			placeholder='Search ...'
	      			style={{paddingLeft: 5, fontSize: 14,marginTop: 5 }}
	      		/>
	      	</View>

	      	<ScrollView style={{paddingTop: 10}}>

	      		<View style={styles.commentCard}>
		      		<Text style={{ color: '#00a8ff', fontSize: 17}}>Nanyongo Julliette</Text>
		      		<Text style={{paddingTop: 5}}>17th December 2019</Text>
		      		<View style={{flexDirection: 'row', paddingTop: 5}}> 
			      		<Text style={{color: 'grey'}}>
			      			It is a very tricky subject if you ask me ... 
			      		</Text>
			      		<TouchableOpacity>
			      			<Text style={{fontStyle: 'italic', fontSize: 13, color: 'lightgrey', marginTop: 2}}>Read more</Text>
			      		</TouchableOpacity>
		      		</View>
	      		</View>

	      		<View style={styles.commentCard}>
		      		<Text style={{ color: '#00a8ff', fontSize: 17}}>Nanyongo Julliette</Text>
		      		<Text style={{paddingTop: 5}}>17th December 2019</Text>
		      		<View style={{flexDirection: 'row', paddingTop: 5}}> 
			      		<Text style={{color: 'grey'}}>
			      			It is a very tricky subject if you ask me ... 
			      		</Text>
			      		<TouchableOpacity>
			      			<Text style={{fontStyle: 'italic', fontSize: 13, color: 'lightgrey', marginTop: 2}}>Read more</Text>
			      		</TouchableOpacity>
		      		</View>
	      		</View>

	      		<View style={styles.commentCard}>
		      		<Text style={{ color: '#00a8ff', fontSize: 17}}>Nanyongo Julliette</Text>
		      		<Text style={{paddingTop: 5}}>17th December 2019</Text>
		      		<View style={{flexDirection: 'row', paddingTop: 5}}> 
			      		<Text style={{color: 'grey'}}>
			      			It is a very tricky subject if you ask me ... 
			      		</Text>
			      		<TouchableOpacity>
			      			<Text style={{fontStyle: 'italic', fontSize: 13, color: 'lightgrey', marginTop: 2}}>Read more</Text>
			      		</TouchableOpacity>
		      		</View>
	      		</View>

	      		<View style={styles.commentCard}>
		      		<Text style={{ color: '#00a8ff', fontSize: 17}}>Nanyongo Julliette</Text>
		      		<Text style={{paddingTop: 5}}>17th December 2019</Text>
		      		<View style={{flexDirection: 'row', paddingTop: 5}}> 
			      		<Text style={{color: 'grey'}}>
			      			It is a very tricky subject if you ask me ... 
			      		</Text>
			      		<TouchableOpacity>
			      			<Text style={{fontStyle: 'italic', fontSize: 13, color: 'lightgrey', marginTop: 2}}>Read more</Text>
			      		</TouchableOpacity>
		      		</View>
	      		</View>

	      		<View style={styles.commentCard}>
		      		<Text style={{ color: '#00a8ff', fontSize: 17}}>Nanyongo Julliette</Text>
		      		<Text style={{paddingTop: 5}}>17th December 2019</Text>
		      		<View style={{flexDirection: 'row', paddingTop: 5}}> 
			      		<Text style={{color: 'grey'}}>
			      			It is a very tricky subject if you ask me ... 
			      		</Text>
			      		<TouchableOpacity>
			      			<Text style={{fontStyle: 'italic', fontSize: 13, color: 'lightgrey', marginTop: 2}}>Read more</Text>
			      		</TouchableOpacity>
		      		</View>
	      		</View>

	      		<View style={styles.commentCard}>
		      		<Text style={{ color: '#00a8ff', fontSize: 17}}>Nanyongo Julliette</Text>
		      		<Text style={{paddingTop: 5}}>17th December 2019</Text>
		      		<View style={{flexDirection: 'row', paddingTop: 5}}> 
			      		<Text style={{color: 'grey'}}>
			      			It is a very tricky subject if you ask me ... 
			      		</Text>
			      		<TouchableOpacity>
			      			<Text style={{fontStyle: 'italic', fontSize: 13, color: 'lightgrey', marginTop: 2}}>Read more</Text>
			      		</TouchableOpacity>
		      		</View>
	      		</View>
	      	</ScrollView>
      	</View>
      </View>
    );
  }
}



 