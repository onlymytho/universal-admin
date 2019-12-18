import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import ListHeader from './organisms/listHeader';
import ListController from './organisms/listController';
import ListTable from './organisms/listTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Brand'
    };
  }

  render() {
    return (
      <div className="App">
        <ListHeader name={this.state.name} />
        <ListController />
        <div className="listTableWrapper">
          <ListTable />
        </div>
      </div>
    );
  }
}

export default App;
