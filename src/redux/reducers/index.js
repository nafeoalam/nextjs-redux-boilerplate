import { combineReducers } from 'redux'

import courseReducer from './courseReducer'
import authReducer from './authReducer'
import megaMenuReducer from './megaMenuReducer'
import myCourseReducer from './myCourseReducer'

export const reducers = combineReducers({
    courseReducer,
    authReducer,
    megaMenuReducer,
    myCourseReducer,
})