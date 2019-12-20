import React, {Component} from 'react';
import './listHeader.scss'

class ListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div className="listHeader">
            {this.props.children}
        </div>
    );
  }
}

export default ListHeader;