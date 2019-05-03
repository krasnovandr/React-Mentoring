import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware, { END } from 'redux-saga';
import rootSaga, { moviesSaga } from './actions';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState) => {
    // const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(moviesSaga);
    store.runSaga = () => sagaMiddleware.run(moviesSaga);
    store.close = () => store.dispatch(END);
   
    return store;
};


// export const persistor = persistStore(store)


// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware, { END } from 'redux-saga';

// import {
//   rootReducer,
//   rootSaga,
// } from '../modules';

// const sagaMiddleware = createSagaMiddleware();

// export default (initialState) => {
//   const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

//   sagaMiddleware.run(rootSaga);
//   store.runSaga = () => sagaMiddleware.run(rootSaga);
//   store.close = () => store.dispatch(END);

//   return store;
// };
