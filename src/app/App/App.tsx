import AddBeers from 'app/AddBeers/AddBeers'
import Pay from 'app/Pay/Pay'
import * as React from 'react'
import * as styles from './style.css'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import {OrderProvider} from '../providers/OrderProvider'

class App extends React.Component {
  public render() {
    return (
      <OrderProvider>
        <div className={styles.appContainer}>
          <BrowserRouter>
            <Switch>
              <Route path='/addBeers' component={AddBeers} />
              <Route path='/pay' component={Pay} />
              <Redirect from='/' to='/addBeers' exact={true} />
            </Switch>
          </BrowserRouter>
        </div>
      </OrderProvider>
    )
  }
  
}

export default App
