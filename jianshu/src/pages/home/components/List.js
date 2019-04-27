import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  ListItem,
  ListInfo,
} from '../style';
// import topicItemPic from 'static/image/topicItem.jpeg';

const ListItems = (props) => (
  props.list.map(item => (
    <ListItem key={item.id}>
      <ListInfo>
        <h3 className="title">{item.title}</h3>
        <p className="desc">{item.desc}</p>
      </ListInfo>
      <img className="pic" src={item.url} alt="png"/>
    </ListItem>
  ))
)
export class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <ListItems list={list}/>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleBreifList']).toJS()

})

export default connect(mapState, null)(List);
