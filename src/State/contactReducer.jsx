const initialState = {contact: JSON.parse(localStorage.getItem('city')) || [{city: 'Минск', mobile: '+375(29)526-91-74', office: '+375(17)123-45-67', email: 'info@rrholding.by', address: 'Трюм'}]};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CONTACT':
        return {
            ...state,
            contact: [action.payload]
        }
        default: return state
    }
}