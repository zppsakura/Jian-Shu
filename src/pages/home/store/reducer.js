import { fromJS } from 'immutable';
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  users:[],
  page: 1,
  showScroll: false,
  text:'查看全部 >'
})

export default (state = defaultState, action) => {
  if(action.type === 'change_home_data'){
    return (
      state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        users: fromJS(action.users)
      })
    )
  }
  if(action.type === 'add_more_list'){
    return(
      state.set('articleList',state.get('articleList').concat(fromJS(action.list)))
    )
  }
  if(action.type === 'change_scroll_state'){
    return(
      state.set('showScroll',fromJS(action.value))
    )
  }
  if(action.type === 'get_all_writer_list'){
    return (
      state.set('users',fromJS(action.value)).set('text',fromJS(action.text))
    )
  }
  if(action.type === 'get_stop_writer_list'){
    return(
      state.set('users',fromJS(action.value)).set('text',fromJS(action.text))
    )
  }
  return state;
}