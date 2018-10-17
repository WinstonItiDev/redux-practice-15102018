import request from 'superagent'

function receiveCats(cats) {
    return {
        type: 'RECEIVE_CATS',
        cats: cats
    }
}

function fetchCats() {
    return (dispatch) => {
        request.get('/api/data')
        .then((res) => {
            return res.body
        }).then(cats => {
            dispatch(receiveCats(cats))
        })
    }
}

function addCatAction() {
    return {
        type: 'ADD_CAT',
        payload: {
            name: name,
            address: address
        }
    }
}

function addCat(formInput) {
    return dispatch => {
        request
        .post('/api/data')
        .send(formInput)
        .end((err, res) => {
            if (err) {
                console.error(err.message)
                return
            }
            dispatch(addCatAction(formInput))
        })
    }
}


module.exports = {
    receiveCats,
    fetchCats,
    addCat,
    addCatAction
}

// function getCats() {
//     return {
//         type: 'GET_CATS'
//     }
// }