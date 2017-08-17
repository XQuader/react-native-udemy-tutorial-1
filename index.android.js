import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

import configureStore from './src/Store';
const store = configureStore();

AppRegistry.registerComponent('NativeTutorial', () => () => <App store={store} />);
