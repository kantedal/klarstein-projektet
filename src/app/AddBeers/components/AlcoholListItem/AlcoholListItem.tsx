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
  const id = `${article.Namn.toLowerCase().split(' ').join('-')}-${article.nr}`

  return (
    <div className={styles.alcoholListItem} onClick={() => console.log(id)}>
      <div className={styles.alcoholColumn}>{article.Namn}</div>
      <div className={styles.alcoholColumn}>{article.Forpackning}</div>
      <div className={styles.alcoholColumn}>{article.Alkoholhalt}</div>
      <div className={styles.alcoholColumn}>{article.Prisinklmoms}kr</div>
    </div>
  )
}

export default AlcoholListItem
