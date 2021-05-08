const initialState = {goods: JSON.parse(localStorage.getItem('goods')) || []};

export default (state=initialState, action) => {
    switch(action.type) {
        case 'OPEN_GOODS':
            return {
                ...state,
                goods: action.payload
            }
        case 'ADD_COUNT_IN_GOODS':
            // action.payload.count += 1;
            // debugger
            return {
                ...state,
                goods: {...state.goods, count: action.payload}
            }
        case 'DELETE_COUNT_IN_GOODS': {
            action.payload.count -= 1;
            return {
                ...state,
                goods: action.payload
            }
        }
        default: return state
    }
}