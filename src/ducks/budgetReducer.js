import axios from 'axios'

const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

// Action
const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'


// Action builder/creator
export function requestBudgetData() {
    let data = axios.get('/api/budget-data').then(res => res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}
export const addPurchase = () => {
    let data = axios.post
}

// Reducer
export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case REQUEST_BUDGET_DATA + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_BUDGET_DATA + '_FULFILLED':
            return { ...payload, loading: false }
        default: return state;
    }
}