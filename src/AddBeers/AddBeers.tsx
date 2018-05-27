import * as React from 'react'

namespace AddBeers {
  export interface Props {}
  export interface State {}
}

class AddBeers extends React.Component<AddBeers.Props, AddBeers.State> {
  state: AddBeers.State = {}
  
  render() {
    const {} = this.props
    const {} = this.state
    return (
      <div>
        hej mannen
      </div>
    )
  }
}

export default AddBeers
