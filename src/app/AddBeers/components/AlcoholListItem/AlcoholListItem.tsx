import * as React from 'react'
import * as styles from './AlcoholListItem.css'
import { Article } from '../../../models/Article'

namespace AlcoholListItem {
  export interface Props {
    article: Article
  }
}

const AlcoholListItem: React.SFC<AlcoholListItem.Props> = (props) => {
  const { article } = props
  return (
    <div className={styles.alcoholListItem}>
      {article.Namn}
    </div>
  )
}

export default AlcoholListItem
