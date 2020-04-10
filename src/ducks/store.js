import { createStore } from "redux";

const initialState = {
    name: '',
    address: '',
    city: '',
    nation_state: '',
    zipcode: 0,
    image: '',
    mortgageAmount: 0,
    monthlyRent: 0,
    listing: []
}



function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 
        default:
            return state;
    }
}

export default createStore(reducer);