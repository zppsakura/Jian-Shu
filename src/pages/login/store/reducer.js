import { fromJS } from 'immutable';
const defaultState = fromJS({
 login: false,
 isLoginShow: true,
 isRegisterShow: false,
 username:'111',
 password:'123'
})

export default (state = defaultState, action) => {
  if(action.type === 'change_login_state'){
    return (
      state.set('isLoginShow',fromJS(action.isLoginShow)).set('isRegisterShow',fromJS(action.isRegisterShow))
    )
  }
  if(action.type === 'change_login'){
    return (
      state.set('isLoginShow',fromJS(action.isLoginShow)).set('isRegisterShow',fromJS(action.isRegisterShow))
    )
  }
  if(action.type === 'change'){
    return (
      state.set('login',fromJS(action.login))
    )
  }
  if(action.type === 'logout'){
    return (
      state.set('login',fromJS(action.login))
    )
  }
  return state;
}