import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { List, Recommond, Topic, Writer } from './components';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
import { actionCreators } from './store';
import bannerImg from 'static/image/banner.jpg';

class Home extends PureComponent {


  handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  bindEvents() {
    window.addEventListener('scroll', () => {
      this.props.changeScrollTopShow();
    })
  }

  componentDidMount() {
    this.props.getHomeData();
    this.bindEvents();
  }

  render() {
    const { showScroll } = this.props;
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
        {
          showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
          : null
        }
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  getHomeData: () => {  
    dispatch(actionCreators.queryHomeData())
  },
  changeScrollTopShow: () => {
    let top = document.documentElement.scrollTop;
    let isShow = top > 400;
    dispatch(actionCreators.changeScrollShow(isShow));
  }
})

export default connect(mapState, mapDispatch)(Home);
