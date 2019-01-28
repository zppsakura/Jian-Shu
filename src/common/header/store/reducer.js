import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
})

export default (state = defaultState, action) => {
  if(action.type === 'search_focus'){
    return state.set('focused', true)
  }
  if(action.type === 'search_blur'){
    return state.set('focused', false)
  }
  if(action.type === 'change_list'){
    //通过merge来替代set更改数据，可以更改多个
    return state.merge({
      list:action.value,
      totalPage:action.totalPage
    });
  }
  if(action.type === 'mouse_enter'){
    return state.set('mouseIn', true)
  }
  if(action.type === 'mouse_Leave'){
    return state.set('mouseIn', false)
  }
  if(action.type === 'list_change'){
    return state.set('page',action.page)
  }
  
  return state;
}