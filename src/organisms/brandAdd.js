import React, {Component} from 'react';
import './brandAdd.scss';
import Button from '../atoms/button'
import Select from '../atoms/select'
import InputText from '../molecules/inputText'

class BrandAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div className="brandAdd">
          <h1>Add Brand</h1>
          <div>
              <InputText />
              <Button />
          </div>
        </div>
    );
  }
}

export default BrandAdd;