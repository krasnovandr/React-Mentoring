import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware, { END } from 'redux-saga';
import rootSaga, { moviesSaga } from './actions';

export const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(moviesSaga);
    store.runSaga = () => sagaMiddleware.run(moviesSaga);
    store.close = () => store.dispatch(END);

    return store;
};

