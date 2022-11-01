/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import NewsFeed from './screens/newsFeed/NewsFeed';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NewsFeed);
