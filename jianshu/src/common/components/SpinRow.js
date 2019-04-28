import React, { PureComponent } from 'react'
import { 
  SwitchRow,
  SwitchSpin
} from './style';

export class SpinRow extends PureComponent {

  changePage = () => {
    console.log('click')
  }

  render() {
    const { label } = this.props;
    let spinIcon;
    return (
      <SwitchRow>
        { label }
        <SwitchSpin onClick={this.changePage}>
          <i ref={(icon) => {spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
        </SwitchSpin>
      </SwitchRow>
    )
  }
}

export default SpinRow
