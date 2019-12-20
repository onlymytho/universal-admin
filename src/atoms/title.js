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
        <title text={this.props.text} className="title">{this.props.childern}</title>
    );
  }
}

export default Title;