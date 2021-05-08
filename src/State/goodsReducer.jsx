const initialState = {goods: []};

export default (state=initialState, action) => {
    debugger
    switch(action.type) {
        case 'OPEN_GOODS':
            return {
                ...state,
                goods: action.payload
            }
        default: return state
    }
}