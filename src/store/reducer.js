import { combineReducers } from 'redux-immutable'
import headerReaducer from '../common/header/store/reducer.js'
import homeReducer from '../pages/home/store/reducer.js'
import detailReducer from '../pages/detail/store/reducer.js'
import loginReducer from '../pages/login/store/reducer.js'

export default combineReducers({
  header: headerReaducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})