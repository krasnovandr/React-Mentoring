import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const configureStore = (initialState) => {
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

    return store;
};


// export const persistor = persistStore(store)