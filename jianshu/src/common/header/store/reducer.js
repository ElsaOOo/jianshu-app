import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_FOCUS:
      return state.set('focused', true);
    case actionTypes.INPUT_BLUR:
      return state.set('focused', false);
    case actionTypes.GET_SEARCH_LIST:
      return state.set('list', action.list)
                  .set('totalPage', action.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      if (action.currentPage < (state.get('totalPage') - 1)) {
        return state.set('page', (action.currentPage + 1));
      } else {
        return state.set('page', 0);
      }
    default:
      return state;
  }
}
