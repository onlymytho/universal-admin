import React, {Component} from 'react';
import Input from '../atoms/input'
import InputLabel from '../atoms/inputLabel'
import './molecules.scss'

class InputCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const placeholder = this.props.placeholder;

    return (
        <div className="inputBox checkbox">
            <InputLabel
                name={this.props.name}
                label={this.props.label}
                required={this.props.required}
            />
            <Input
                type="checkbox"
                name={this.props.name}
            />
        </div>
    );
  }
}

export default InputCheckbox;