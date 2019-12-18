import React, {Component} from 'react';
import './controlItem.scss';
import Button from '../atoms/button'

class ControlItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div className="controlItem">
            <Button innerText={this.props.name} />
        </div>
    );
  }
}

export default ControlItem;