import { OrderList } from '../models/OrderList'
import * as React from 'react'
import './Pay.css'
import Button from 'material-ui/Button'

namespace Pay {
  export interface Props {
  }
  export interface State {

  }
}
const ordersList: OrderList = [{
  name: 'Norrlands king',
  id: "asd",
  quantity: 23,
  price: 22,
  img: ''
}]
class Pay extends React.Component<Pay.Props, Pay.State> {
  render () {
    const {} = this.props
    return (
      <div className={'pay-container'}>
        asd
        <div className={'buttons-container'}>
          <Button variant="outlined" color="primary" className={'pay-button'}>
            Bakåt
          </Button>
          <Button variant="outlined" color="default" className={'pay-button'}>
            OK
          </Button>
        </div>
      </div>
    )
  }
}

export default Pay