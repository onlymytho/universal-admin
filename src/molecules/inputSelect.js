import React, {Component} from 'react';
import Select from '../atoms/select'
import InputLabel from '../atoms/inputLabel'
import './molecules.scss'

class InputSelect extends Component {
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
          <Select
              name={this.props.name}
              options={this.props.options}
          />
        </div>
    );
  }
}

export default InputSelect;