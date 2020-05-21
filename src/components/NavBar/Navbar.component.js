import React,{Component} from 'react';
import {View, 
	Text, 
	TouchableOpacity, 
	StyleSheet,
	TextInput,
	Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Navbar.style.js';


export default class Navbar extends Component<Props>{
	render(){
		return(
			<View>
				 <View style={styles.navBar}>
				 		<View style={{marginLeft: - 10}}>
				 			<TouchableOpacity>
					 			<Icon style={styles.navItem} name="menu" size={30} color='white' />
					 		</TouchableOpacity>
				 		</View>
					 	<View style={styles.rightNav}>
						 	<TouchableOpacity>
						 		<Icon style={styles.navItem} name="search" size={30} color='white' />
						 	</TouchableOpacity>
						 	<TouchableOpacity>
						 		<Icon style={styles.navItem} name="more-vert" size={30} color='white' />
						 	</TouchableOpacity>
					 	</View>
				 </View>
			</View>
			);
	}
}