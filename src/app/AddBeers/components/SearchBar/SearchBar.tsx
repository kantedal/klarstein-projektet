import { Input } from 'material-ui'
import * as React from 'react'

import * as styles from './SearchBar.css'

// import { Input } from 'material-ui's
namespace SearchBar {
  export interface Props {
    onChange: (value: string) => void
  }
}

const SearchBar: React.SFC<SearchBar.Props> = (props) => {
  const { onChange } = props

  const inputChange = (e: any) => onChange(e.target.value)

  return (
    <div className={styles.searchbarContainer}>
      <i className={`material-icons ${styles.searchbarIcon}`}>search</i>
      <Input placeholder={'Sökfras...'} disableUnderline={true} onChange={inputChange} style={{ height: '40px' }}/>
    </div>
  )
}

export default SearchBar
