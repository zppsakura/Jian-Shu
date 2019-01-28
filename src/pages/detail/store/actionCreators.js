import axios from 'axios'

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      console.log('====================================');
      console.log(res.data);
      console.log('====================================');
    })
  }
}