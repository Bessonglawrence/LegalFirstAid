'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './Button.style';

class Button extends Component {
  render() {
    return (
      	<TouchableOpacity
	      	onPress={() => this.props.onPress()}
	      	style={styles.container}
	      	>
      		<Text style={styles.text}>{this.props.Text ?? 'Click'}</Text>
      	</TouchableOpacity>
    );
  }
}

export default Button;