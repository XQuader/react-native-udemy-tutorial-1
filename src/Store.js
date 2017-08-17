import { createStore } from 'redux';
import reducers from './reducers';

export default function configureStore() {
    const store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers/index.js').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};