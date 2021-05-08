import {createStore, combineReducers} from 'redux';
import menuReducer from './menuReducer';
import catalogReducer from './catalogReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import contactReducer from './contactReducer';
import goodsReducer from './goodsReducer';

const reducer = {
    menuReducer,
    catalogReducer,
    cartReducer,
    userReducer,
    contactReducer,
    goodsReducer
}
const store = createStore(combineReducers(reducer),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;