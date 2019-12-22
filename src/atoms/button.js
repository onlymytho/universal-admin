import React, {Component} from 'react';
import './atoms.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    const className = 'button ' + this.props.className

    switch (this.props.elementType) {
      case 'link': {
        return (
          null
          // <Link className={this.props.className}>
          //   {props.children}
          // </Link>
        );
      }
  
      case 'button': {  
        return (
          <button
            type='button'
            onClick={this.props.onClick}
            className={className}
          >
            {this.props.innerText}
          </button>
        );
      }
  
      case 'anchor': {
        return (
          <a
            href="#"
            onClick={this.props.onClick}
            className={className}
          >
            {this.props.innerText}
          </a>
        );
      }
  
      default:
        return null;
    }
  }
}

export default Button;