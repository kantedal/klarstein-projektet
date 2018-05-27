import ApolloClient from 'apollo-boost'
import { createBrowserHistory } from 'history'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import * as ReactDOM from 'react-dom'
import { Router } from 'react-router'

import { App } from './app'

// prepare store
const history = createBrowserHistory()

const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
  <Router history={history}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
)
