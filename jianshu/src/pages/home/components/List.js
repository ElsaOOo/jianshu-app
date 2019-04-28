import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
import { actionCreators } from '../store';
// import topicItemPic from 'static/image/topicItem.jpeg';

const ListItems = (props) => (
  props.list.map(item => (
    <Link key={item.id} to="/detail">
      <ListItem >
        <ListInfo>
          <h3 className="title">{item.title}</h3>
          <p className="desc">{item.desc}</p>
        </ListInfo>
        <img className="pic" src={item.url} alt="png"/>
      </ListItem>
    </Link>
  ))
)
export class List extends PureComponent {
  render() {
    const { list, getMoreList } = this.props;
    return (
      <div>
        <ListItems list={list}/>
        <LoadMore onClick={getMoreList}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleBreifList']).toJS()

})
const mapDispatch = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreators.getMoreList())
  }
})
export default connect(mapState, mapDispatch)(List);
