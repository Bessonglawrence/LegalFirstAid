'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './ScrollItems.style';

class ScrollItems extends Component {

	constructor(props) {
	  super(props);

	}

  render() {
      const {lawType} =this.props;
    return (
	      <TouchableOpacity onPress={()=>this.onButtonPressed}>
	        <Text style={styles.filterText}>{lawType.title}</Text>
	      </TouchableOpacity>
);
  }
}


export default ScrollItems;