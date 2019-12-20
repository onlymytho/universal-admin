import React, {Component} from 'react';
import './atoms.scss'
import BrandAdd from '../organisms/brandAdd'

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <textarea
            placeholder={this.props.placeholder}
        >
        </textarea>
    );
  }
}

export default Textarea;