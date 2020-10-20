/**
 * @format
 */

import {AppRegistry,AsyncStorage} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
const Parse = require('parse/react-native');

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize('LegalFirstAid');
Parse.serverURL = 'http://localhost:1337/parse'

AppRegistry.registerComponent(appName, () => App);
