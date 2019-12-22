import React, {Component} from 'react';
import Textarea from '../atoms/textarea'
import InputLabel from '../atoms/inputLabel'
import './molecules.scss'

class InputFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const placeholder = this.props.placeholder;

    return (
        <div className="inputBox file">
            <InputLabel
                name={this.props.name}
                label={this.props.label}
                required={this.props.required}
            />
            <Textarea
                name={this.props.name}
                accept={this.props.format}
            />
        </div>
    );
  }
}

export default InputFile;