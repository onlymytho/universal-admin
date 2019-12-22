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
      <div>
        {
          this.props.isOpen ?
            <div className="modalWrapper">
              <div
                // onClick={this.props.close}
                className="modal-overlay"
              />
              <div className="modal">
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