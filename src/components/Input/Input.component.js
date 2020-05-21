'use strict';

import React, { Component } from 'react';
import { 
	TextInput, 
	View, 
	Text,
	NativeModules,
  	LayoutAnimation, 
	TouchableWithoutFeedback, 
	TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const CustomLayoutSpring = {
    duration: 500,
    create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 1,
    },
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 1,
    },
};
class Input extends Component {
    
    constructor(props) {
      super(props);
    
      this.state = {
        isFocused: false,
        showpasswordicon: true,
      };
    }

    // onFocus used to change bordercolor and icon color when user clicks on a field
    onFocusChange = () => {
        this.setState({ isFocused: true });
    }

    // function to show password icon when unlocked or locked 
    renderIcon() {
        const passwordunlocked = <Icon name={this.props.passwordiconunlocked} size={30} color={this.state.isFocused ? '#00aeef': 'grey'}/*'#a6a6a6'*//>
        const passwordlocked = <Icon name={this.props.passwordiconlocked} size={30} color={this.state.isFocused ? '#00aeef': 'grey'}/*'#a6a6a6'*//>

        if(this.state.showpasswordicon == true ){
            return <Text>{passwordunlocked}</Text>
        } else {
            return <Text>{passwordlocked}</Text>
        }
    }

    // function to decide weather or not to show password icon
    showpassword = () => {
        if (this.props.secureTextEntry == true && this.state.showpasswordicon == true) {
            return true;
        } else {
            return false
        }
    }

    componentDidUpdate() {
        LayoutAnimation.configureNext(CustomLayoutSpring);
    }

    render() {

        const { inputStyle, lableStyle, containerStyle, mainwrapperstyle, iconstyle, inputwrapperstyle, textInputView } = styles;
        const { lable, value, onChangeText, selectionColor, placeholder, secureTextEntry, icon } = this.props;

        // icon for the field inputs
        const myicon = <Icon   name={icon} size={20} color={this.state.isFocused ?  '#00aeef' :  'grey' } />

        return (
            <View
                onFocus={this.onFocusChange}
                style={mainwrapperstyle}
            >
                <View style={containerStyle}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={[lableStyle, this.state.isFocused ? {fontSize: 15, fontStyle: 'italic', color: '#00aeef' } : lableStyle]}>{lable} :</Text>
                        </View>

                        <View style={[textInputView, this.state.isFocused ? {borderColor: '#00aeef',} : textInputView]}>
                            <TextInput
                            	selectionColor={selectionColor}
                                onFocus={this.onFocusChange}
                                secureTextEntry={this.showpassword()}
                                placeholder={placeholder}
                                autoCorrect={false} // to stop auto correction on email field
                                style={[inputStyle, this.state.isFocused ? { fontStyle: 'normal', color: 'grey' } : { fontStyle: 'italic', color: 'white' }]}
                                value={value}
                                keyboardType={this.props.keyboardType ?? 'default'}
                                onChangeText={onChangeText}
                            />

		                    <TouchableOpacity onPress={() => this.setState({ showpasswordicon: !this.state.showpasswordicon })} style={iconstyle}>
		                        {this.renderIcon()}
		                    </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </View>
        )
    }

}
const styles = {
    mainwrapperstyle: {
        marginHorizontal: 14,
        marginVertical: 10,
        // padding: 5,
    },
    inputStyle: {
        height: 40,
        width: '100%',
        fontSize: 18,
        marginTop: 9,
    },
    lableStyle: {
        fontSize: 12,
        color: 'grey'/*'#a6a6a6'*/,
        // flex: 1,
    },
    containerStyle: {
        flexDirection: 'row',
        // height: 45,
        paddingLeft: 5,
        alignItems: 'center',
    },
    iconstyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputView: {
    	 flex: 3, 
    	 justifyContent: 'center', 
    	 paddingHorizontal: 10, 
    	 borderBottomWidth: 1, 
    	 borderColor: 'lightgrey', 
    	 flexDirection: 'row' 
    }
}

export default Input;