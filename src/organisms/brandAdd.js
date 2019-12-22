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
              <InputText label="브랜드 이름" />
              <InputText label="" />
              <InputText label="" />
              <InputText label="" />
              <InputText label="" />
              <Button elementType='button' innerText='Cancel' onClick={this.props.close} />
              <Button elementType='button' innerText='Add' onClick={this.props.close} />
          </div>
        </div>
    );
  }
}

export default BrandAdd;