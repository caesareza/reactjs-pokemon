import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
import rootReducers from './reducers';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

const configureStore = preloadedState => {
    const store = createStore(
        rootReducers(history),
        preloadedState,
        compose(applyMiddleware(
            thunk,
            routerMiddleware(history),
        ))
    )

    return{
        ...store,
        persistor: persistStore(store),
    }
}


export default configureStore;

//
//
// const middleware = applyMiddleware(thunk, createLogger);
//
// export const store = createStore(persistedReducers, middleware);
// export const persistor = persistStore(store);