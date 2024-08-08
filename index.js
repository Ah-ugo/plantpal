/**
 * @format
 */
import './gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PageWrapper from './PageWrapper';

AppRegistry.registerComponent(appName, () => PageWrapper);
