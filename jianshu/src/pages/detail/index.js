import React, { PureComponent } from 'react'
import {
  DetailWrapper,
  Header,
  ArticleBreif
} from './style'
import topicItemPic from 'static/image/topicItem.jpeg';

export class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>Vue项目引进ElementUI组件的方法</Header>
        <ArticleBreif>
          <img className="avatar" src={topicItemPic} alt="avatar.png"/>
          <div>
            <div>
              <span>林学老歌</span>
              <span>+关注</span>
            </div>
            <div>
              2019.03.21 12:08 字数 1493 阅读 998评论 0喜欢 55
            </div>
          </div>
        </ArticleBreif>
      </DetailWrapper>
    )
  }
}

export default Detail;
