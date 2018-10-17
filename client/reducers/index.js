import { combineReducers } from 'redux'
import cats from './cats'

const reducers = combineReducers({
    cats: cats
})

export default reducers