import * as React from 'react'
import { Input } from '@material-ui/core'
import './SearchBar.css'

namespace SearchBar {
  export interface Props {}
}

const SearchBar: React.SFC<SearchBar.Props> = (props) => {
  const { children } = props
  return (
    <div className={'searchbar-container'}>
      <i className={`material-icons searchbar-icon`}>search</i>
      <Input placeholder={'Sökfras...'} disableUnderline={true} style={{ height: '40px' }}/>
    </div>
  )
}

export default SearchBar
