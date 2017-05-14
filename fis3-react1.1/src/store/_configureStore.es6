/**
 * @module _configureStore
 * @author 小虎牙
 */
import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducers } from '/src/reducers';


/**
 * @method initial state
 * @return object
 */
export default function _configureStore() {
    return createStore(
        combineReducers(reducers),
        applyMiddleware(reduxThunk)
    );
}