import axios from 'axios'
import { fromJS } from 'immutable';

export const searchFocus = () => ({
  type: 'search_focus'
});

export const searchBlur = () => ({
  type: 'search_blur'
});

export const mouseEnter = () => ({
  type: 'mouse_enter'
});

export const mouseLeave = () => ({
  type: 'mouse_Leave'
});

export const listChange = (page) => ({
  type: 'list_change',
  page: page
})

//通过thunk来定义的函数
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data
      const action = {
        type: 'change_list',
        value: fromJS(data.data),
        totalPage: Math.ceil(data.data.length / 10)
      }
      dispatch(action)
    }).catch(()=>{
    })
  }
}



