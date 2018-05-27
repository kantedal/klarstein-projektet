import './App.css'

import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import AddBeers from './AddBeers/AddBeers'

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route path='/addBeers' component={AddBeers} />
            <Redirect from='/' to='/addBeers' exact={true} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
