import React, { Component } from 'react'
import { connect } from 'react-redux';


export class TodoList extends Component {

  render() {
    const { inputVal, list } = this.props;
    return (
      <div>
        <div>
          <input value={inputVal} onChange={this.props.changeInputVal}/>
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => (
              <li key={item} onClick={() => this.props.handleDelete(index)}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  inputVal: state.inputVal,
  list: state.list
})

const mapDispatchToProps = (dispatch) => ({
  changeInputVal: (e) => {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    dispatch(action)
  },
  handleClick: () => {
    const action = {
      type: 'add_item',
    }
    dispatch(action);
  },
  handleDelete: (index) => {
    console.log(index);
    const action = {
      type: 'delete_item',
      index,
    }
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
