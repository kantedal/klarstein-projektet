import AppComponent from 'app/App/App'
import { AuthProvider } from 'app/providers/AuthProvider'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Redirect, Route, Switch } from 'react-router'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'rgb(59, 193, 176)',
      main: 'rgb(59, 193, 176)',
      dark: 'rgb(59, 193, 176)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#f00',
    },
  },
})

export const App = hot(module)(() => (
  <MuiThemeProvider theme={theme}>
    <AppComponent />
  </MuiThemeProvider>
))
