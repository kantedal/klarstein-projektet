import { OrderList } from '../models/OrderList'
import * as React from 'react';

interface OrderProviderValue {
  orderList: OrderList
  actions: {
    reset: () => void
  }
}
const OrderContext = React.createContext<OrderProviderValue>(null)

class OrderProvider extends React.Component<any, any> {
  
  private reset = () => {
    this.setState({ orderList: [] })
  }

  state: OrderProviderValue = {
    orderList: [{
      name: 'Norrlands king',
      id: 'asd',
      quantity: 5,
      price: 22,
      img: ''
    },{
      name: 'Luftrunken',
      id: 'asd123',
      quantity: 2,
      price: 10.5,
      img: ''
    }],
    actions: {
      reset: this.reset
    }
  }

  render() {
    return <OrderContext.Provider value={this.state}>{this.props.children}</OrderContext.Provider>
  }
}

export { OrderProvider, OrderContext }
