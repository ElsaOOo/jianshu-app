import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';
import axios from 'axios';

const getSearchList = (data) => ({
  type: actionTypes.GET_SEARCH_LIST,
  list: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const inputFocus = () => ({
  type: actionTypes.INPUT_FOCUS
});

export const inputBlur = () => ({
  type: actionTypes.INPUT_BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = (currentPage) => ({
  type: actionTypes.CHANGE_PAGE,
  currentPage,
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerlist.json').then((res) => {
      dispatch(getSearchList(res.data.data));
    }).catch((err) => {
      console.log(err)
    })
  }
}
