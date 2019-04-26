import styled from 'styled-components';

export const HomeWrapper  = styled.div`
  width: 960px;
  padding-top: 30px;
  margin: 0 auto;
  height: 300px;
  display: flex;
`

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  .banner-img {
    width: 100%;
    height: 100%;
  }
`

export const HomeRight = styled.div`
  width: 240px;

`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
`
export const TopicItem = styled.div`
  height: 32px;
  box-sizing: border-box;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 0 10px 10px 0;
  padding-right: 5px;
  cursor: pointer;
  .topic-pic {
    float: left;
    width: 32px;
    height: 100%;
    margin-right: 5px;
  }
`
