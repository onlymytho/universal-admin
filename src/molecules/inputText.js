import React, {Component} from 'react';
import Input from '../atoms/input'
import InputLabel from '../atoms/inputLabel'
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
        <div className="inputBox text">
          <InputLabel
              name={this.props.name}
              label={this.props.label}
              required={this.props.required}
          />
          <Input
              type="text"
              name={this.props.name}
              required={this.props.required}
              minLength={this.props.maxLength}
              maxLength={this.props.maxLength}
              placeholder={!placeholder? "Enter here..." : placeholder}
          />
        </div>
    );
  }
}

export default InputText;