import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// export default createStore(rootReducers, applyMiddleware(thunk, createLogger));

const persistConfig = {
    key: 'myPokemons',
    storage: storage,
    whitelist: ['mypokemons']
};

const persistedReducers = persistReducer(persistConfig, rootReducers);
const middleware = applyMiddleware(thunk, createLogger);

export const store = createStore(persistedReducers, middleware);
export const persistor = persistStore(store);