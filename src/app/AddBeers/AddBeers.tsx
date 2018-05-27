import * as styles from './AddBeers.css'

import * as React from 'react'

import SearchBar from './components/SearchBar/SearchBar'
import { Article } from '../models/Article';
import AlcoholListItem from './components/AlcoholListItem/AlcoholListItem'
// const xml2js = require('xml2js')

namespace AddBeers {
  export interface Props {}
  export interface State {
    alcoholItems: Article[]
    searchValue: string
  }
}

class AddBeers extends React.Component<AddBeers.Props, AddBeers.State> {
  state: AddBeers.State = { alcoholItems: [], searchValue: '' }
  
  render() {
    const {} = this.props
    const { alcoholItems, searchValue } = this.state

    const lowercaseSearchVal = searchValue.toLowerCase()

    let alcoholCount = 0
    const alcoholListItems = alcoholItems
      .filter((art: Article, index: number) => {
        if (alcoholCount < 30 && typeof art.Namn === 'string') {
          const matching = art.Namn.toLowerCase().indexOf(lowercaseSearchVal) !== -1
          if (matching) {
            alcoholCount += 1
            return true
          }
        }
        return false
      })
      .map((article: Article) => <AlcoholListItem key={article.Artikelid} article={article} />)

    return (
      <div className={styles.addbeersContainer}>
        <SearchBar onChange={this.searchChange} />
        <div className={styles.list}>
          {alcoholListItems}
        </div>
      </div>
    )
  }

  componentDidMount() {
    const data = require('xml-loader!./alcohol.xml')
    const alcoholItems = data.artiklar.artikel
      .filter((article: Article) => article.Varugrupp[0] === 'Öl' && article.Forpackning[0] !== 'Fat')
      .map((article: Article) => {
        const newObj = {}
        for (const key of Object.keys(article)) {
          newObj[key] = !isNaN(Number(article[key][0])) ? Number(article[key][0]) : article[key][0]
        } 
        return newObj
      })
    this.setState({ ...this.state, alcoholItems })
  }

  searchChange = (searchValue: string) => this.setState({ ...this.state, searchValue })
}

export default AddBeers
