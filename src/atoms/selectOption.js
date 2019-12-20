import React, {Component} from 'react';
import './atoms.scss'

class SelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <option value={this.props.index}>{this.props.value}</option>
    );
  }
}

export default SelectOption;