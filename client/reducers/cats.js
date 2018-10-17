
function reducer(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_CATS':
            return action.cats
        case 'ADD_CAT':
            return [...state, action.payload]
        default:
            return state
    }   
}

export default reducer