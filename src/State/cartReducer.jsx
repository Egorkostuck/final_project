const initialState = {cart: []};

export default (state = initialState, action) => {   
    switch (action.type) {
        case 'ADD_GOODS':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        case 'DELETE_GOODS': return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        }
        default: return state;
    }
}

