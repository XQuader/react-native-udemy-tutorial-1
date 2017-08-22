import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from './reducers';

export default function configureStore() {
    const store = createStore(
        reducers,
        devToolsEnhancer()
    );

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers/index.js').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};