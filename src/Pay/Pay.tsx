import * as React from 'react'

namespace Pay {
  export interface Props {
    style?: any
  }
  export interface State {

  }
}

class Pay extends React.Component<Pay.Props, Pay.State> {
  render () {
    const {children, style} = this.props
    return (
      <div style={styles.container}>
        {children}
      </div>
    )
  }
}

const styles: {[name: string]: React.CSSProperties} = {
  container: {

  }
}
export default Pay