/**
 * @module store
 * @author 小虎牙
 */

import reduxThunk from 'redux-thunk'
import reducers from '/src/reducers'
import { createStore,combineReducers,applyMiddleware } from 'redux'
export default function configureStore(){
	return createStore(
		combineReducers(reducers),
		applyMiddleware(reduxThunk)
	)
}