import React, { Component } from 'react'
import {
  CateItem,
  DownloadItem,
  QrBox
} from '../style';
import memberUrl from 'static/image/home_member.png';
import serialUrl from 'static/image/home_serial.png';
import copyUrl from 'static/image/home_copy.png';
import schoolUrl from 'static/image/home_school.png';
import qrCode from 'static/image/qrCode.png';

const ToolTip = () => (
  <QrBox className="code-box">
    <img className="code-pic" src={qrCode} alt=""/>
  </QrBox>
)

export class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false,
    }
  }

  showToolTip = () => {
    this.setState({
      showToolTip: true,
    })
  }
  offToolTip = () => {
    this.setState({
      showToolTip: false,
    })
  }
  render() {
    const { showToolTip } = this.state;
    return (
      <div>
        <CateItem>
          <img className="board-pic" src={memberUrl} alt=""/>
        </CateItem>
        <CateItem>
          <img className="board-pic" src={serialUrl} alt=""/>
        </CateItem>
        <CateItem>
          <img className="board-pic" src={copyUrl} alt=""/>
        </CateItem>
        <CateItem>
          <img className="board-pic" src={schoolUrl} alt=""/>
        </CateItem>
        <DownloadItem onMouseEnter={this.showToolTip} onMouseLeave={this.offToolTip}>
          <img className="code-pic" src={qrCode} alt="" />
          <div className="text">
            <p className="title">下载简书手机APP</p>
            <p className="desc">随时随地发现和创作内容</p>
          </div>
          {
            showToolTip ? <ToolTip /> : null
          }
        </DownloadItem>
      </div>
    )
  }
}

export default Recommend
