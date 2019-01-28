import axios from 'axios'
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      let result = res.data.data;
      let action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        users: result.users
      }
      dispatch(action)
    })
  }
}

export const getHomeList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeMoreList.json?page=' + page).then((res) => {
      let result = res.data.data;
      let action = {
        type: 'add_more_list',
        list: result.articleList,
      }
      dispatch(action)
    })
  }
}


export const changeScroll = (flag) => {
 return (dispatch) => {
   let action = {
     type: 'change_scroll_state',
     value: flag
   }
   dispatch(action)
 }
}


export const getAllWriterList = () => {
  return (dispatch) => {
    axios.get('/api/homeUserList.json').then((res) => {
      let result = res.data.data
      let action = {
        type: 'get_all_writer_list',
        value: result.users,
        text: '收起全部 >'
      }
      dispatch(action)
    })
  }
}

export const getStopWriterList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      let result = res.data.data
      let action = {
        type: 'get_stop_writer_list',
        value: result.users,
        text: '查看全部 >'
      }
      dispatch(action)
    })
  }
}