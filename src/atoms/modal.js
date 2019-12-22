import React, {Component} from 'react';
import './modal.scss'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
  }
  
  render() {
    return (
      <div>
        {console.log(this.state.isOpen)}
        {
          this.state.isOpen ?
            <div className="ModalWrapper">
              <div className="Modal-overlay" />
              <div className="Modal">
                  <p className="title">{this.props.title}</p>
                  <div className="content">
                      {this.props.children}
                  </div>
              </div>
            </div>
          :
          null
        }
      </div>
    );
  }
}

export default Modal;