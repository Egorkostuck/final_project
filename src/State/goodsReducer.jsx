const initialState = {goods: JSON.parse(localStorage.getItem('goods')) || []};

export default (state=initialState, action) => {
    switch(action.type) {
        case 'OPEN_GOODS':
            return {
                ...state,
                goods: action.payload
            }
        case 'ADD_COUNT_IN_GOODS':
            let newCount = action.payload + 1;
            return {
                ...state,
                goods: {...state.goods, count: newCount}
            }
        case 'DELETE_COUNT_IN_GOODS': {
            let newCount = action.payload - 1;
            return {
                ...state,
                goods: {...state.goods, count: newCount}
            }
        }
        default: return state
    }
}