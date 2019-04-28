import { fromJS } from 'immutable';
// import bannerImg from 'static/image/banner.jpg';
// import articleItemPic from 'static/image/topicItem.jpeg';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  articleBreifList: [],
  authorList: [],
  authorCurPage: 1,
  authorTotalPage: 0,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_AUTHOR_LIST:
      return state.merge({
        authorList: action.list,
        authorTotalPage: action.totalPage
      })
    case actionTypes.GET_TOPIC_LIST:
      return state.set('topicList', action.list);
    case actionTypes.GET_ARTICLE_LIST:
      return state.set('articleBreifList', action.list);
    default:
      return state;
  }
}
