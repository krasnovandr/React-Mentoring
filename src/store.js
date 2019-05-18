import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { END } from 'redux-saga';
import { moviesSaga } from './actions';

export const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(moviesSaga);
    store.runSaga = () => sagaMiddleware.run(moviesSaga);
    store.close = () => store.dispatch(END);

    return store;
};

