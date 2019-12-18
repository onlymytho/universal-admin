import React, {Component} from 'react';
import './atoms.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <button className={this.props.className}>
            {this.props.innerText}
        </button>
    );
  }
}

export default Button;