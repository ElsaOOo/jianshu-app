const defaultState = {
  inputVal: '',
  list: []
}
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = {...state};
    newState.inputVal = action.value;
    return newState;
  }
  if (action.type === 'add_item') {
    const newState = {...state};
    newState.list.push(newState.inputVal);
    newState.inputVal = '';
    return newState;    
  }
  if (action.type === 'delete_item') {
    const newState = {...state};
    newState.list.splice(action.index, 1);
    console.log(newState.list)
    return newState;    
  }
  return state;
}
