import React from 'react'
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


const getListArea = (show) => {
  return show ? <SearchInfoDiv /> : null
}


const Header = (props) =>  (
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
          className={props.focused ? 'focused' : ''}
          onFocus={props.inputFocus}
          onBlur={props.inputBlur}
        ></NavSearch>
        <i className="iconfont">&#xe623;</i>
        { props.focused ? <SearchInfoDiv /> : null}
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

const SearchInfoDiv = () => (
  <SearchInfo>
    <SearchInfoTitle>
      热门搜索
      <SearchInfoSwitch>换一批</SearchInfoSwitch>
    </SearchInfoTitle>
    <SearchInfoList>
      <SearchInfoItem>语文</SearchInfoItem>
      <SearchInfoItem>数学</SearchInfoItem>
      <SearchInfoItem>科学</SearchInfoItem>
      <SearchInfoItem>化学</SearchInfoItem>
      <SearchInfoItem>物理</SearchInfoItem>
      <SearchInfoItem>生物</SearchInfoItem>
    </SearchInfoList>
  </SearchInfo>
)

const mapStateToProps = (state) => ({
  focused: state.get('header').get('focused')
})
const mapDispatchToProps = (dispatch) => ({
  inputFocus: () => {
    const action = actionCreators.inputFocus();
    dispatch(action);
  },
  inputBlur: () => {
    const action = actionCreators.inputBlur();
    dispatch(action);
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
