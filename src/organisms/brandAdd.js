import React, {Component} from 'react';
import './brandAdd.scss';
import Button from '../atoms/button'
import InputText from '../molecules/inputText'
import InputFile from '../molecules/inputFile'
import InputDate from '../molecules/inputDate'
import InputDatetime from '../molecules/inputDatetime'
import InputTextarea from '../molecules/inputTextarea'
import InputSelect from '../molecules/inputSelect'
import InputCheckbox from '../molecules/inputCheckbox'
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
              <InputText name="brandName" label="브랜드 이름" required />
              <InputFile name="corporateDocument" label="사업자등록증" accept="image/png, image/jpeg"/>
              <InputDate name="" label="날짜 입력" />
              <InputDatetime label="시간 입력" />
              <InputSelect label="이벤트" options={["꼼평단", '화화설', '그거']}/>
              <InputTextarea label="메모" />
              <InputCheckbox label="담당자" />
              <Button elementType='button' innerText='Cancel' onClick={this.props.close} />
              <Button elementType='button' innerText='Add' onClick={this.props.close} />
          </div>
        </div>
    );
  }
}

export default BrandAdd;