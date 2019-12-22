import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './modal.scss'
import Button from '../atoms/button';
import { checkPropTypes } from 'prop-types';

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