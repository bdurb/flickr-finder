import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch = (searchTerm) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&text=${searchTerm}&per_page=25&page=1&format=json&nojsoncallback=1&api`)
      .then(res => {
        res.json()
        .then(data => {
          this.props.setResults(data.photos.photo)
          this.props.history.push('/photos')
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSearchTermChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }


  handleSubmit = e => {
    e.preventDefault()
    this.handleSearch(this.state.searchTerm)
    this.setState({searchTerm: ''})
  }
  render() { 
    return (
      <div className='App'>
        <h1>Welcome To Flickr Finder!</h1>
        <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        name="searchTerm"
        onChange={this.handleSearchTermChange}
        placeholder="Search Flicker!"
        value={this.state.searchTerm}
        />
      </form>
    </div>
    );
  }
}
 
export default withRouter(Search);