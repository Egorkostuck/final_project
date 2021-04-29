const initialState = {cart: JSON.parse(localStorage.getItem('cart')) || []};

export default (state = initialState, action) => {   
    switch (action.type) {
        case 'ADD_GOODS':
            // const item = action.payload
            // item.inCart = true;
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        case 'DELETE_GOODS':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case 'ADD_COUNT':
            let index = state.cart.indexOf(action.payload);
            action.payload.count += 1;
            state.cart.splice(index, 1, action.payload);
            return {
                ...state,
                cart: [...state.cart] 
            }
        case 'DELETE_COUNT': {
            let index = state.cart.indexOf(action.payload);
            action.payload.count -= 1;
            state.cart.splice(index, 1, action.payload);
            return {
                ...state,
                cart: [...state.cart] 
            }
        }
           
        default: return state;
    }
}

