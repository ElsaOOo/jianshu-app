const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === 'input_focus') {
    const newState = {...state};
    newState.focused = true;
    return newState;
  }
  if (action.type === 'input_blur') {
    const newState = {...state};
    newState.focused = false;
    return newState;
  }
  return state;
}
