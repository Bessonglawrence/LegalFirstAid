/*'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class TermsNConditions extends Component {
  render() {
    return (
      <View />
    );
  }
}

const styles = StyleSheet.create({

});


export default TermsNConditions;*/

import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  	StyleSheet,
  	View,
  	Modal,
  	Text,
  	ScrollView,
  	TouchableOpacity,
} from 'react-native';

class TermsNConditions extends Component {
	constructor(props) {
	  	super(props);

	  	this.state = {
	  		visibility: false
	  	};
	}
  	render() {
  		const {
  			modalHeaderContainerStyle,
  			modalContainerStyle,
  			modalPanelStyle,
  			modalHeaderTextStyle,
  			modalBodyContainerStyle,
  			eulaBtnTextStyle,
  			eulaButtonStyle,
  			headingStyle,
  			textStyle,
  			sectionStyle
  		} = styles
	    return (
	    	<View>
	    		<TouchableOpacity
	    			onPress={() => this.setState({ visibility: true })}
	    			style={eulaButtonStyle}>
	    			<Text style={eulaBtnTextStyle}>Terms and Conditions</Text>
	    		</TouchableOpacity>

		      	<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.visibility}
					onRequestClose={() => this.setState({ visibility: false }) }>
					<ScrollView style={modalContainerStyle}
						keyboardShouldPersistTaps="handled"
						>
		            	<View style={modalPanelStyle} >
		            		<View style={modalHeaderContainerStyle} >
		            			<View style={{flexDirection: 'row', flex: 1}}>
			            			<View style={{ flex: 7 }}>
			              				<Text  style={modalHeaderTextStyle} >
			              					Terms and Conditions
			              				</Text>
			            			</View>
			            			<TouchableOpacity
			            				style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}
			            				onPress={() => this.setState({visibility: false})} >
			            				<FontAwesome name="close" color="#fff" size={16} />
			            			</TouchableOpacity>
		            			</View>
		            		</View>
		            		<View style={modalBodyContainerStyle} >
			            		<View style={sectionStyle}>
			            			<Text style={headingStyle}>Terms and conditions</Text>
			            			<Text style={textStyle}>
				            			Some lorem ipsum goes hereSome lorem ipsum goes here
				            			Some lorem ipsum goes hereSome lorem ipsum goes here
				            			Some lorem ipsum goes hereSome lorem ipsum goes here
			            			</Text>
								</View>
			            		<View style={sectionStyle}>
			            			<Text style={headingStyle}>Terms and conditions</Text>
			            			<Text style={textStyle}>
				            			Some lorem ipsum goes hereSome lorem ipsum goes here
				            			Some lorem ipsum goes hereSome lorem ipsum goes here
				            			Some lorem ipsum goes hereSome lorem ipsum goes here
			            			</Text>
								</View>
			        		</View>
		            	</View>
		            </ScrollView>
		        </Modal>
	        </View>
	    );
  	}
}

const styles = StyleSheet.create({
	modalContainerStyle: {
    	backgroundColor: '#000000A0',
    	padding: 30,
    	flex: 1,
    	height: '100%'
    },
	modalPanelStyle: {
		backgroundColor: '#fff',
    	height: '100%'
	},
	modalHeaderContainerStyle: {
		backgroundColor: '#b3106d',
		marginBottom: 5,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10
	},
	modalHeaderTextStyle: {
		color: '#fff',
		fontSize: 16,
		lineHeight: 20,
		textAlign: 'center',
	},
	modalBodyContainerStyle: {
		padding: 20
	},
	adminBtnSectionStyle:{
		flex: 1,
	},
	adminBtnStyle:{
		alignItems: 'center',
		flexDirection: 'column',
		padding: 10,
		backgroundColor: 'red',
	},
	adminBtnTextStyle:{
		color: 'white',
		textAlign: 'center',
	},
	adminBtnIconStyle:{},

	eulaButtonStyle: {

	},
	sectionStyle: {
		marginBottom: 10,
	},
	headingStyle: {
		fontSize: 18,
		fontWeight: '700',
		textAlign: 'center',
		marginBottom: 10,
	} ,
	eulaBtnTextStyle: {
		color: '#aaeafa',
		textDecorationLine: 'underline'
	},
  	textStyle: {
  		fontSize: 16,
  		lineHeight: 20
  	},
});

export default TermsNConditions;
