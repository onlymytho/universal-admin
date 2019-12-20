import React, {Component} from 'react';
import './brandAdd.scss';
import Button from '../atoms/button'
import Select from '../atoms/select'
import InputText from '../molecules/inputText'
import Title from '../atoms/title'

class BrandAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div className="brandAdd">
          <Title text="Add Brand"/>
          <div>
              <InputText />
              <InputText />
              <InputText />
              <InputText />
              <InputText />
              <Button />
          </div>
        </div>
    );
  }
}

export default BrandAdd;