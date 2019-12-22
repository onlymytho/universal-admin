import React, {Component} from 'react';
import './atoms.scss'

class InputLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <label
            htmlFor={this.props.name}
            className="inputLabel"
        >
            {this.props.label} {this.props.required? <span className="requiredStar">*</span> : null }
        </label>
    );
  }
}

export default InputLabel;