import React, {Component} from 'react';
import './atoms.scss'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}

            minLength={this.props.minlength}
            maxLength={this.props.maxlength}
            size={this.props.size}
        >
        </input>
    );
  }
}

export default Input;