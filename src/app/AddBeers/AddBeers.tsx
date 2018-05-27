import './AddBeers.css'

import * as React from 'react'

import SearchBar from './components/SearchBar/SearchBar'
// const xml2js = require('xml2js')

namespace AddBeers {
  export interface Props {}
  export interface State {}
}

class AddBeers extends React.Component<AddBeers.Props, AddBeers.State> {
  state: AddBeers.State = {}
  
  render() {
    const {} = this.props
    const {} = this.state
    return (
      <div className='addbeers-container'>
        <SearchBar />
      </div>
    )
  }
}

export default AddBeers
