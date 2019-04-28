import React, { Component } from 'react'
import { connect } from 'react-redux';
import { List, Recommond, Topic, Writer } from './components';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
import { actionCreators } from './store';
import bannerImg from 'static/image/banner.jpg';

class Home extends Component {

  componentDidMount() {
    this.props.getHomeData();
  }


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
          <Writer className="writer-col"/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch) => ({
  getHomeData: () => {  
    dispatch(actionCreators.queryHomeData())
  }
})

export default connect(null, mapDispatch)(Home);
