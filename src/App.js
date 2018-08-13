import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import Search from './components/Search';
import Photos from './components/Photos';
import LargePhoto from './components/LargePhoto';

class App extends Component {
  state = {
    results: [],
    searchTerm: ''
  }

  setResults = (results) => {
    this.setState({results})
  }

  render() {
    return (
      <div>
        <Route exact path='/' component={() => <Search setResults={this.setResults} />} />
        <Route path='/photos' component={() => <Photos results={this.state.results} />} />
        <Route path='/large-photo' component={LargePhoto} />
      </div>
    );
  }
}

export default withRouter(App);
