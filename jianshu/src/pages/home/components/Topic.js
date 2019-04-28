import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
  TopicWrapper,
  TopicItem
 } from '../style';

const TopicItems = (props) => {
  return props.topicList.map(item => (
    <TopicItem key={item.id}>
      <img className="topic-pic" src={item.url} alt="topicpic.png" />
      <span>{item.title}</span>
    </TopicItem>
  ))
}

export class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        <TopicItems topicList={topicList}/>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.get('home').get('topicList').toJS()
})

export default connect(mapStateToProps, null)(Topic);
