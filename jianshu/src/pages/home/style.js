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
  width: 280px;
  margin-left: 20px;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #dcdcdc;
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

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  justify-content: space-between;
  .pic {
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const CateItem = styled.a`
  display: block;
  cursor: pointer;
  .board-pic {
    width: 100%;
  }
`

export const DownloadItem = styled.div`
  margin: 20px 0;
  display: flex;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 5px 15px;
  align-items: center;
  cursor: pointer;
  position: relative;
  .code-box {
    position: absolute;
    background: #fff;
    margin: 0 auto;
    padding: 8px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    top: -190px;
    left: 30px;
    .code-pic {
      width: 160px;
      height: 160px;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 84px;
      border-right: solid 10px transparent;
      border-top: solid 10px #fff;
      border-left: solid 10px transparent;
      filter: drop-shadow(1px 0 0 #CAD5E0) drop-shadow(0 1.5px 0 #CAD5E1);
    }
  }
  .code-pic {
    width: 50px;
    height: 50px;
  }
  .text {
    margin-left: 10px;
    .title {
      margin-bottom: 10px;
    }
    .desc {
      color: #999;
      font-size: 13px;
    }
  }
`

export const QrBox = styled.div`
  .code-box {
    position: absolute;
    background: #fff;
    margin: 0 auto;
    padding: 8px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    top: -190px;
    left: 30px;
    .code-pic {
      width: 160px;
      height: 160px;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 82px;
      border-right: solid 10px transparent;
      border-top: solid 10px #fff;
      border-left: solid 10px transparent;
      filter: drop-shadow(1px 0 0 #CAD5E0) drop-shadow(0 1.5px 0 #CAD5E1);
    }
  }
`

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .author-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .info {
    margin-left: 5px;
    .desc {
      font-size: 13px;
      color: #777;
      margin-top: 10px;
    }
  }
  .auto-span {
    flex: 1;
  }
  .follow {
    font-size: 13px;
    color: #42c02e;
    margin-top: -30px;
    cursor: pointer;
  }
`

