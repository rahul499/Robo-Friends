import React, { Component } from 'react';
import Cards from './Cards/Cards';
import Header from './Header/Header';
import Search from './Search/Search';
import Scroll from './Scroll/Scroll';
import ErrorBoundary from './ErrorBoundary';


class App extends Component {

  constructor() {
    super();
     this.state = {
      data: [],
      searchfield: ''
     }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json();
    })
    .then(users => {
    this.setState({ data: users })
    })
  }

  onSearchChange = (e) => {
   this.setState({ searchfield: e.target.value })
  }

  render() {
   const { data, searchfield } = this.state;

   const filteredData = data.filter(item => {
    return  item.name.toLowerCase().includes(searchfield.toLowerCase());
   })
    
    return !data.length ?
    <h1>Loading....</h1> :
     (
          <div>
            <Header />
            <Search searchChange = {this.onSearchChange} />
            <Scroll>
              <ErrorBoundary>
               <Cards data = {filteredData}  />
              </ErrorBoundary>
            </Scroll>
          </div>
     );
  }
}

export default App;