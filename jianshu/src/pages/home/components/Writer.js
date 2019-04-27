import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import SpinRow from 'common/components/SpinRow';
import {
  AuthorRow
} from '../style';
// import articleItemPic from 'static/image/topicItem.jpeg';

const Author = (props) => {
  return props.list.map(item => (
    <AuthorRow key={item.id}>
      <img className="author-pic" src={item.url} alt="" />
      <div className="info">
        <p className="title">{item.name}</p>
        <p className="desc">{item.breif}</p>
      </div>
      <div className="auto-span"></div>
      <span className="follow">+ 关注</span>
    </AuthorRow>
  ))
}

export class Writer extends Component {


  componentDidMount() {
    this.props.getAuthorList();
  }

  render() {
    const { list } = this.props;
    return (
      <Fragment>
        <SpinRow label="推荐作者"/>
        <Author list={list}/>
      </Fragment>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'authorList']).toJS()
})

const mapDispatch = (dispatch) => ({
  getAuthorList: () => {
    dispatch(actionCreators.queryAuthorList());
  }
})

export default connect(mapState, mapDispatch)(Writer);
