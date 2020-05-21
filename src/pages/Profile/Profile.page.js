import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  CheckBox,
  NativeModules,
  LayoutAnimation, 
  TextInput
} from 'react-native';
import 
  Modal, 
{ ModalTitle, 
  SlideAnimation, 
  ModalContent } 
  from 'react-native-modals';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TnC } from './../../components';
import {Actions, Drawer} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import styles from './Profile.style';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

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

export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      visible : false,
    };
  }

  componentDidUpdate() {
        LayoutAnimation.configureNext(CustomLayoutSpring);
    }

  toggleModal(visible){
      this.setState({visible: visible})
    }

  _renderScrollViewContent() {
    return (
      <View style={styles.scrollViewContent}>
          <View style={styles.row}>

            <Text style={{fontSize: 19, color: '#4d4c4c', fontStyle: 'italic', marginLeft: 10}}>Samantha Williams</Text>

            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Icon name="person" color="grey" size={30} style={{marginRight: 10}}/>
              <View> 
                <Text style={{fontStyle: 'italic', fontSize: 17, color: '#00a8ff'}}>
                   About Me
                </Text>
                <Text style={{fontStyle: 'italic', fontSize: 15, color: 'grey', paddingRight: 40, lineHeight: 21}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Eu lobortis elementum nibh tellus molestie nunc. Ultricies mi eget mauris pharetra. Id aliquet lectus proin nibh nisl condimentum. 
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Icon name="directions-bike" color="grey" size={30} style={{marginRight: 10}}/>
              <View> 
                <Text style={{fontStyle: 'italic', fontSize: 17, color: '#00a8ff'}}>
                   Hobbies
                </Text>
                <Text style={{fontStyle: 'italic', fontSize: 15, color: 'grey', paddingRight: 40, lineHeight: 21}}>
                   swimming, drinking, mountain-climbing, singing, making music, reading, Taking walks in a windy day.
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Icon name="place" color="grey" size={30} style={{marginRight: 10}}/>
              <View> 
                <Text style={{fontStyle: 'italic', fontSize: 17, color: '#00a8ff'}}>
                   Location
                </Text>
                <Text style={{fontStyle: 'italic', fontSize: 15, color: 'grey', paddingRight: 40, lineHeight: 21}}>
                   Douala, Cameroon
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Icon name="publish" color="grey" size={30} style={{marginRight: 10}}/>
              <View> 
                <Text style={{fontStyle: 'italic', fontSize: 17, color: '#00a8ff'}}>
                   Recent Post
                </Text>
                <Text style={{fontStyle: 'italic', fontSize: 15, color: 'grey', paddingRight: 40, lineHeight: 21}}>
                   swimming, drinking, mountain-climbing, singing, making music, reading, Taking walks in a windy day.
                </Text>
              </View>
            </View>
            
          </View>
      </View>
    );
  }

  render() {

    const { scrollY } = this.state;

    const headerHeight = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, - 50],
      extrapolate: 'clamp',
    });

    const actionButton = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.5, 0],
      extrapolate: 'clamp',
    });

    return (

      <View style={styles.fill}>

        <ScrollView
          style={styles.fill}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}]
          )}
        >
          {this._renderScrollViewContent()}
          <Animated.View style={[styles.actionButtonView, {opacity: actionButton}]}>
            <ActionButton
              buttonColor="#00a8ff"
              size={60}
              buttonText="Edit"
              buttonIcon="edit"
              position="center"
              onPress={() => this.toggleModal(true)}
            />
          </Animated.View>
          

        </ScrollView>

        <View>
          <Modal
              visible={this.state.visible}
              modalTitle={<ModalTitle style={{backgroundColor: '#00a8ff',}} textStyle={{fontSize: 20, color: 'white'}} title="Post a question" />}
              overlayBackgroundColor="#000000"
              modalAnimation={new SlideAnimation({
                slideFrom: 'bottom',
                useNativeDriver: true,
                initialValue: 0
              })}
              onTouchOutside={() => this.toggleModal(!this.state.visible)}
              onSwipeOut={() => this.toggleModal(!this.state.visible)}
            >
              <ModalContent style={styles.modalContent}>
                <Text style={styles.typeQuestion}>Type your question</Text>
                <View style={styles.inputView}>
                  <TextInput
                    placeholder="Type ..."
                    numberOfLines={5}
                    multiline={true}
                    maxHeight={80}
                    style={styles.inputStyle}
                    placeholderTextColor='white'
                    selectionColor='white'
                  /> 
                </View>
                <TouchableOpacity style={styles.postButton}>
                  <Text style={{color: 'white', fontSize: 20}}>Post</Text> 
                </TouchableOpacity>
                <View style={{marginTop: 40, flexDirection: 'row'}}> 
                  <CheckBox />
                  <View style={{marginTop: 3}}> 
                    <Text style={{color:'grey', paddingRight: 35}}>
                      By checking this box you agree to the terms and conditions of this app.
                      You can read them by clicking on the hot link below.
                    </Text>
                    <TnC />
                  </View>
                </View>
              </ModalContent>
            </Modal>
        </View>

        <Animated.View style={[styles.header, {height: headerHeight}]}>

        <Animated.Image
          style={[
            styles.backgroundImage,
            {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
          ]}
          source={require('./../../../res/images/samantha.jpeg')}
        />

          <View style={styles.bar}>
            <View style={styles.backIconStyle}>
              <TouchableOpacity onPress={()=>Actions.jump("home")}>
                <Icon style={styles.navItem} name="arrow-back" size={30} color='white' />
              </TouchableOpacity>
              <Text style={styles.title}>Profile</Text>
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
        </Animated.View>

      </View>
    );
  }
}
