import React, { Component } from 'react'
import { connect } from 'react-redux';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWraper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style';
import { actionCreators } from './store';

class Header extends Component {
  render() {
    const {focused, list,page, inputFocus, 
      inputBlur, mouseEnter, mouseLeave,
      mouseIn, changePage
     } = this.props;
    return (
      <HeaderWrapper>
        <Logo href="/"/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <SearchWraper>
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={() => inputFocus(list) }
              onBlur={inputBlur}
            ></NavSearch>
            <i className="iconfont zoom">&#xe623;</i>
            { (focused || mouseIn ) ? <SearchInfoDiv data={list} page={page} mouseEnter={mouseEnter} mouseLeave={mouseLeave} changePage={changePage}/> : null }
          </SearchWraper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}


const SearchInfoDiv = (props) => {
  const {data, page, mouseEnter, mouseLeave, changePage } = props;
  let spinIcon;
  const newList = data.toJS();
  const pageList = newList.slice(page*10, ((page+1)*10));
  return (
    <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <SearchInfoTitle>
        热门搜索
        <SearchInfoSwitch onClick={() => changePage(page, spinIcon)}>
          <i ref={(icon) => {spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
        </SearchInfoSwitch>
      </SearchInfoTitle>
      <SearchInfoList>
        {
          pageList.map((item) => (
            <SearchInfoItem key={item}>{item}</SearchInfoItem>
          ))
        }
      </SearchInfoList>
    </SearchInfo>
  )
}

const mapStateToProps = (state) => ({
  focused: state.get('header').get('focused'),
  mouseIn: state.get('header').get('mouseIn'),
  list: state.get('header').get('list'),
  page: state.get('header').get('page'),
})
const mapDispatchToProps = (dispatch) => ({
  inputFocus: (list) => {
    if (list.size === 0) {
      dispatch(actionCreators.getList())
    }
    dispatch(actionCreators.inputFocus());
  },
  inputBlur: () => {
    const action = actionCreators.inputBlur();
    dispatch(action);
  },
  mouseEnter: () => {
    dispatch(actionCreators.mouseEnter());
  },
  mouseLeave: () => {
    dispatch(actionCreators.mouseLeave());
  },
  changePage: (page, spinIcon) => {
    let transformVal = spinIcon.style.transform; 
    let originAngle = transformVal === '' ? parseInt(Number(transformVal), 10) : parseInt(transformVal.replace(/[^0-9]/ig, ''), 10);
    originAngle = originAngle === 0 ? 360 : (originAngle + 360);
    spinIcon.style.transform = `rotate(${originAngle}deg)`;
    dispatch(actionCreators.changePage(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
