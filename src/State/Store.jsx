import {createStore, combineReducers} from 'redux';
import menuReducer from './menuReducer';

const reducer = {
    menuReducer
}
const store = createStore(combineReducers(reducer),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;