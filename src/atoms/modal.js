import React, {Component} from 'react';
import './modal.scss'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <div className="ModalWrapper">
          <div className="Modal-overlay" />
          <div className="Modal">
              <p className="title">{this.props.title}</p>
              <div className="content">
                  {this.props.children}
              </div>
          </div>
        </div>
    );
  }
}

export default Modal;