import axios from 'axios'


const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

// Actions
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'


// ACTION BUILDERS/CREATORS
export const requestUserData = () => {
    let data = axios.get('/auth/user-data')
        .then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}



// REDUCER
export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = payload.user
            return { email, firstName, lastName }
        default: return state;
    }
}