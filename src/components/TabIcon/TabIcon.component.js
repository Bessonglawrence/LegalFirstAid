import React from 'react';
import Icon  from 'react-native-vector-icons/Feather';
import styles from './TabIcon.style';

const TabIcon = ({title, focused, selected}) => {

    let iconName = "";

    if (title == 'Feeds') {
        iconName = "home";
    }

    if ( title == "Post A Question" ) {
        iconName = "plus"
    }

    if ( title == "News" ) {
        iconName = "rss-feed"
    } 

    if ( title == "Profile" ) {
        iconName = "user"
    } 

    return (
        <Icon
            size={20}
            name={iconName}
            style={{ color: focused ? styles.focusedColor : '#ccc' }}
       />
    )
}

export default TabIcon;