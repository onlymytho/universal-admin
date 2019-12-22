import React, {Component} from 'react';
import SelectOption from './selectOption'
import './atoms.scss'

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const selectOptions = Array.from(this.props.options);

    return (
        <select
            name={this.props.name}>
            {selectOptions.map((i, k) => {
                return <SelectOption index={i} key={k}/>
            })}
        </select>
    );
  }
}

export default Select;