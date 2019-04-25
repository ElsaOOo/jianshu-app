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
  SearchWraper
} from './style';
import { actionCreators } from './store';

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

const mapStateToProps = (state) => ({
  focused: state.header.get('focused')
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
