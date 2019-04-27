import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getAuthorList = (data) => ({
  type: actionTypes.GET_AUTHOR_LIST,
  list: fromJS(data),
  totalPage: Math.ceil(data.length / 3)
})


export const queryAuthorList = () => {
  return (dispatch) => {
    axios.get('/api/authorlist.json').then(res => {
      console.log(res.data.data)
      dispatch(getAuthorList(res.data.data))
    }).catch(err => {
      console.log(err)
    })
  }
}
