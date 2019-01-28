export const changeLoginState = () => {
  return (dispatch) => {
    let action = {
      type: 'change_login_state',
      isLoginShow: false,
      isRegisterShow: true
    }
    dispatch(action)
  }
}

export const changeLogin = () => {
  return (dispatch) => {
    let action = {
      type: 'change_login',
      isLoginShow: true,
      isRegisterShow: false
    }
    dispatch(action)
  }
    
}

export const change = () => {
  return (dispatch) => {
    let action = {
      type: 'change',
      login: true
    }
    dispatch(action)
  }
}

export const logout = () => {
  return (dispatch) => {
    let action = {
      type: 'logout',
      login: false
    }
    dispatch(action)
  }
}