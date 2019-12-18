import React, {Component} from 'react';
import ControlItem from './controlItem';
import InputText from '../molecules/inputText'
import './listController.scss'

class ListController extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <div className="listController">
          <div className="this">
            <InputText label="Test Label"/>
          </div>
          <div className="controlList">
              <div className="controlAdjust">
                <ControlItem name="Filter"/>
                <ControlItem name="Group By"/>
                <ControlItem name="Order By"/>
              </div>
              <div className="controlIO">
                <ControlItem name="+ Add"/>
                <ControlItem name="Edit"/>
                <ControlItem name="Delete"/>
              </div>
          </div>
        </div>
    );
  }
}

export default ListController;