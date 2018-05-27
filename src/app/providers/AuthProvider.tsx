import * as React from 'react'

interface AuthProviderValue {
  accessToken: string
  user: any
  actions: {
    successfulLogin: (accessToken: string, user: any) => void
    logout: () => void
  }
}

const AuthContext = React.createContext<AuthProviderValue>(null)

class AuthProvider extends React.Component<{}, AuthProviderValue> {
  private successfulLogin = (accessToken: string, user: any) => {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('user', JSON.stringify(user))
    this.setState({ ...this.state, accessToken, user })
  }
  
  private logout = () => {
    localStorage.setItem('accessToken', '')
    localStorage.setItem('user', null)
    this.setState({ ...this.state, accessToken: '', user: null })
  }

  state: AuthProviderValue = {
    accessToken: localStorage.getItem('accessToken') as string,
    user: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
    actions: {
      successfulLogin: this.successfulLogin,
      logout: this.logout
    }
  }

  render() {
    return <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>
  }
}

export { AuthProvider, AuthContext }
