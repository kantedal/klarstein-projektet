import * as React from 'react'
import './Pay.css'

namespace Pay {
  export interface Props {
  }
  export interface State {

  }
}

class Pay extends React.Component<Pay.Props, Pay.State> {
  render () {
    const {children} = this.props
    return (
      <div className={'pay-container'}>
        {children}
      </div>
    )
  }
}

export default Pay