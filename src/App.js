import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Title from './atoms/title';
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
        <ListHeader>
          <Title text="Brand"/>
        </ListHeader>        
        <ListController />
        <div className="listTableWrapper">
          <ListTable />
        </div>
      </div>
    );
  }
}

export default App;
