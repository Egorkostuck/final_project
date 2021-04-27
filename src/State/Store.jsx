import {createStore, combineReducers} from 'redux';
import menuReducer from './menuReducer';
import catalogReducer from './catalogReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';

const reducer = {
    menuReducer,
    catalogReducer,
    cartReducer,
    userReducer
}
const store = createStore(combineReducers(reducer),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;