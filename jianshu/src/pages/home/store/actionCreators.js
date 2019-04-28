import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getAuthorList = (data) => ({
  type: actionTypes.GET_AUTHOR_LIST,
  list: fromJS(data),
  totalPage: Math.ceil(data.length / 3)
})

const getTopicList = (data) => ({
  type: actionTypes.GET_TOPIC_LIST,
  list: fromJS(data),
})

const getArticleList = (data) => ({
  type: actionTypes.GET_ARTICLE_LIST,
  list: fromJS(data),
})

const addMoreArticle = (data) => ({
  type: actionTypes.ADD_MORE_ARTICLE,
  list: fromJS(data)
})

export const queryAuthorList = () => {
  return (dispatch) => {
    axios.get('/api/authorlist.json').then(res => {
      // console.log(res.data.data)
      dispatch(getAuthorList(res.data.data))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const queryHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homedata.json').then(res => {
      // console.log(res.data);
      const { topicList, articleBreifList} = res.data.data;
      dispatch(getTopicList(topicList));
      dispatch(getArticleList(articleBreifList))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    console.log('click')
    axios.get('/api/homelist.json').then(res => {
      const { articleList } = res.data.data;
      dispatch(addMoreArticle(articleList));
    }).catch(err => {
      console.log(err);
    })
  }
}

export const changeScrollShow = (isShow) => ({
  type: actionTypes.CHANGE_SHOW_SCROLL,
  isShow,
})
