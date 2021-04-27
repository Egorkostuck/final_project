const initialState = {users: JSON.parse(localStorage.getItem('users')) || []};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USERS': 
            return {
                ...state,
                users: [...state.users, action.payload]
            }           
        default: return state;
    }
}