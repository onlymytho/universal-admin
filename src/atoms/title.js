import React, {Component} from 'react';
import './atoms.scss'

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <div className="layoutTitle">{this.props.text}</div>
    );
  }
}

export default Title;