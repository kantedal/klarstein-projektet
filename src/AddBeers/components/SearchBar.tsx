import * as React from 'react'
import './SearchBar.css'

namespace SearchBar {
  export interface Props {}
}

const SearchBar: React.SFC<SearchBar.Props> = (props) => {
  const { children } = props
  return (
    <div className={'nice'}>
      {children}
    </div>
  )
}

export default SearchBar
