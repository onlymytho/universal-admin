import React, {Component} from 'react';
import './controlItem.scss';
import Button from '../atoms/button'
// import Modal from '../atoms/modal'
import BrandAdd from './brandAdd'
import Modal from 'react-modal';

class ControlItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }
  
  _openModal = () => {
    console.log('open')
    this.setState({ isModalOpen: true });
  }

  _closeModal = () => {
    this.setState({ isModalOpen: false }); 
  }

  render() {
    return (
        <div className="controlItem">
            <Button
              onClick={this._openModal}
              innerText={this.props.name}
            />
            <Modal isOpen={this.state.isModalOpen} close={this._closeModal} >
              <BrandAdd />
            </Modal>
        </div>
    );
  }
}

export default ControlItem;