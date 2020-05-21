import React, {Component} from 'react';
import {Router, Stack, Scene,} from 'react-native-router-flux'; 

import {
    Home, 
    Example,
    Splash,
    Notifications,
    Profile,
    Response,
    Login,
    Register,
    Settings,
} from './../pages';
import {
    TabIcon 
} from './../components';
import {SideBar} from './../sections'
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuIcon = () =>{
    return(
        <Icon name="menu" size={25} color="white" style={{marginVertical:8}} />
    )
}

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="splash" component={Splash} hideNavBar={true} />
                    <Scene key="login" component={Login} hideNavBar={true} /> 
                    <Scene key="register" component={Register}  hideNavBar={true}/> 

                    <Scene
                        drawer
                        key="drawer"
                        drawerIcon={MenuIcon}
                        contentComponent={SideBar}
                        navigationBarStyle={{ backgroundColor: '#00a8ff'}}
                        title="Feeds" 
                        titleStyle={{color: 'white', fontSize:23}}
                        >   
                        <Scene key="home" component={Home} hideNavBar={true} />  
                    </Scene>

                    <Scene key="notifications" component={Notifications} title="Notifications" navigationBarStyle={{ backgroundColor: '#00a8ff'}} titleStyle={{color: 'white'}}/> 
                    <Scene key="settings" component={Settings} title="Settings" initial hideNavBar={true} /> 
                    <Scene key="response" component={Response} title="Responses" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: '#00a8ff'}}  /> 
                    <Scene key="profile" component={Profile} hideNavBar />
                </Stack>
            </Router>
        )
    }
}

export default Navigation;