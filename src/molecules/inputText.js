import React, {Component} from 'react';
import Input from '../atoms/input'
import './molecules.scss'

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const placeholder = this.props.placeholder;

    return (
        <div className="inputText">
            <label
              htmlFor={this.props.name}
              className="inputLabel"
            >
              {this.props.label}
            </label>
            <Input
                type="text"
                name={this.props.name}
                placeholder={!placeholder? "Enter here..." : placeholder}
            />
        </div>
    );
  }
}

export default InputText;