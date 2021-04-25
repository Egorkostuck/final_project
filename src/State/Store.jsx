import {createStore, combineReducers} from 'redux';
import menuReducer from './menuReducer';
import catalogReducer from './catalogReducer';
import cartReducer from './cartReducer';

const reducer = {
    menuReducer,
    catalogReducer,
    cartReducer
}
const store = createStore(combineReducers(reducer),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;