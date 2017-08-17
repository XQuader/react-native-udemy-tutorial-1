import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import configureStore from './src/Store';
import App from './src/App';

const store = configureStore();

AppRegistry.registerComponent('NativeTutorial', () => () => (
    <Provider store={store}>
        <App />
    </Provider>
));
