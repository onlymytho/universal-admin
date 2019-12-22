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
        <option value={this.props.key}>{this.props.index}</option>
    );
  }
}

export default SelectOption;