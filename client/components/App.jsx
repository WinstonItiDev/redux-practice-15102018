import React from 'react'

import {connect} from 'react-redux'
import {fetchCats} from '../actions'

import Header from './Header.jsx'

import PostForm from './PostForm.jsx'
import Posts from './Posts.jsx'


class App extends React.Component {

  componentDidMount() {
    // console.log('mount')
    // console.log(this.props)

  }

  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <React.Fragment>
        <Header/>
        <PostForm/>
        <Posts/>
      </React.Fragment>
    )
  }
  

}

function mapStateToProps(state) {
  // console.log({state})
  
  return {
    cats: state.cats
  }
}

export default connect(mapStateToProps)(App)