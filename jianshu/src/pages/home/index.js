import React, { Component } from 'react'
import { List, Recommond, Topic, Writer } from './components';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
import bannerImg from 'static/image/banner.jpg';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={bannerImg} alt="banner.img"></img>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommond />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;
