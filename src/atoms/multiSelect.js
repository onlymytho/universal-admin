import React, {Component} from 'react';
import SelectOption from './selectOption'
import './atoms.scss'

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <select name={this.props.name} multiple>
            {this.props.options.map((i, v) => {
                return <SelectOption index={i} value={v}/>
            })}
        </select>
    );
  }
}

export default MultiSelect;