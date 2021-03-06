import axios from 'axios';

var initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export function requestUserData(){
    var data = axios.get('/auth/user-data').then( res => res.data );
    return {
        type: REQUEST_USER_DATA,
        payload: data
    };
}


function reducer(state=initialState, action){
    let { type, payload } = action;
    switch(type){
        case `${REQUEST_USER_DATA}_FULFILLED`:
            let { email, firstName, lastName } = payload.user;
            return {
                email,
                firstName,
                lastName
            };
        default: return state;
    }
}

export default reducer;