import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import devToolsEnhancer from 'remote-redux-devtools';
import reducers from './reducers';

export default function configureStore() {
    const store = createStore(
        reducers,
        devToolsEnhancer(), applyMiddleware(ReduxThunk)
    );

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers/index.js').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};