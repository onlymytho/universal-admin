import React, {Component} from 'react';
import './controlItem.scss';
import Button from '../atoms/button'
import Modal from '../atoms/modal'
import BrandAdd from './brandAdd'

class ControlItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false, 
    }
  }
  
  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false }); 
  }

  render() {
    return (
        <div className="controlItem">
            <Button onClick={this.openModal} innerText={this.props.name} />
            <Modal isOpen={this.state.isModalOpen} close={this.closeModal} ><BrandAdd /></Modal>
        </div>
    );
  }
}

export default ControlItem;