import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

import styles from './Example.style';
import {Actions} from 'react-native-router-flux';


export default class Example extends Component {
  	render() {
    	return (
      		<View style={styles.container}>
      			<Text style={styles.text}>This is a section displaying you an example text using the text component.</Text>
      			<Text style={styles.text}>You can copy me and use somewhere for your own use</Text>
      		</View>
    	);
  	}
}