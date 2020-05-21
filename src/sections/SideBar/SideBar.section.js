import React,{Component} from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity,
	Image,
	ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions, Drawer} from 'react-native-router-flux';

import styles from './SideBar.section.style';

class SideBar extends Component{

	render(){
		return(
			<View style={styles.mainContainer}>
				<View style={styles.headerContainer}>
					<Image
						source={require('./../../../res/images/samantha.jpeg')}
						style={styles.headerImage}
						/>
					<Text style={styles.headerText}>
						Barrister at the potio Jure law firm, Founder of LawForAll foundation, truth seeker. 
					</Text>
				</View>
				<View style={styles.bodyContainer}>
					<TouchableOpacity style={styles.menuItem} onPress={() =>Actions.home()}>
						<Icon name="home" color="grey" size={20} style={styles.icon} />
						<Text style={styles.text}>Home</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() =>Actions.response()}>
						<Icon name="question-answer" color="grey" size={20} style={styles.icon} />
						<Text style={styles.text}>Responses</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() =>Actions.notifications()}>
						<Icon name="notifications" color="grey" size={20} style={styles.icon} />
						<Text style={styles.text}>Notification</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() =>Actions.profile()}>
						<Icon name="person" color="grey" size={20} style={styles.icon} />
						<Text style={styles.text}>Profile</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() =>Actions.profile()}>
						<Icon name="help" color="grey" size={20} style={styles.icon} />
						<Text style={styles.text}>Help</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() =>Actions.settings()}>
						<Icon name="settings" color="grey" size={20} style={styles.icon} />
						<Text style={styles.text}>Settings</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem}>
						<Text style={[styles.text, {color: '#96031A', marginLeft: 90}]}>LOGOUT</Text>
					</TouchableOpacity>
				</View>
			</View>
			);
	}
}

export default SideBar;