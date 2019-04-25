import styled from 'styled-components';
import logoPic from '../../static/image/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a`
  height: 58px;
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 56px;
  width: 100px;
  background-image: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  margin-right: 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWraper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    transition: all 0.3s ease;
    /* background: green; */
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  border-radius: 19px;
  background: #eee;
  outline: none;
  margin: 9px 0 0 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease-in;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 200px;
    & + .iconfont {
      color: #fff;
      background: #777;
    }
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  /* height: 100px; */
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;

`
export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: inline-block;
  line-height: 20px;
  padding: 2px 6px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #969696;
  margin: 0 10px 15px 0;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0%;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 15px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
