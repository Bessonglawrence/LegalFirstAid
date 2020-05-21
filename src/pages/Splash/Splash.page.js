import React,{Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {
    View,
    Text,
    Image,
    ScrollView,
    Animated
} from 'react-native';
import style from './Splash.style';

export default class Splash extends Component {
    constructor(props){
        super(props);
        this.state={
            opacity: new Animated.Value(0),
        }
    }

    componentDidMount() {
        this.timerHandle = setTimeout( () => {
            Actions.home();
        }, 4000);
    }

    componentWillUnmount() {
        // Is our timer running?                 
        if (this.timerHandle) {                  
            // Yes, clear it                     
            clearTimeout(this.timerHandle);      
            this.timerHandle = 0;                
        }  
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
          toValue: 3,
          duration: 2000,
          useNativeDriver: true,
        }).start();
      }

    render(){
        const { opacity } = this.state;
        return(
            <View style={style.container}>
                <View style={style.scrollStyle}>
                    <Animated.Image
                        onLoad={this.onLoad}
                        source={require('./../../../res/images/water.jpeg')}
                        style={[
                          {
                            opacity: opacity,
                            transform: [
                              {
                                scale: opacity.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [0.85, 1],
                                })
                              },
                            ],
                          },
                          style.image,
                        ]}
                      />
                </View>       
                <View style={style.footer}>
                    <Text style={style.footerText}>
                        Copyright © 2019
                    </Text>
                </View>

            </View>
            );
    }
}