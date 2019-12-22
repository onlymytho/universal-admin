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

            required={this.props.required}
            minLength={this.props.minLength}
            maxLength={this.props.maxLength}
            size={this.props.size}
            accept={this.props.accept}
        >
        </input>
    );
  }
}

export default Input;