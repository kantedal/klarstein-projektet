import { OrderList } from '../models/OrderList'
import * as React from 'react'
import Button from 'material-ui/Button'
import * as classes from './Pay.css'
import * as QRCode from 'qrcode.react'
namespace Pay {
  export interface Props {
  }
  export interface State {

  }
}
const phoneNumber = '+46761142157'
const message = 'Öl bror'
const ordersList: OrderList = [{
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
}]
class Pay extends React.Component<Pay.Props, Pay.State> {
  createQrData = (ordersList: OrderList) => {
    const price = ordersList.reduce((prev, item) => prev + item.quantity * item.price, 0)
    return `C${phoneNumber};${price};%C3%96L+MANNEN;6`
    // C0706948465;100;asd;6
  }
  render () {
    const {} = this.props
    const qrData = this.createQrData(ordersList)
    console.log(qrData)
    return (
      <div className={classes.container}>
        <div className={classes.qrContainer}>
          <QRCode value={qrData} size={256}/>
        </div>
        <div className={classes.buttonsContainer}>
           <Button variant='raised' color='secondary' style={{backgroundColor: '#424dbf', color: 'white'}} className={classes.button}>
            Bakåt
          </Button>
          <Button variant='raised' color='primary' className={classes.button}>
            OK
          </Button>
        </div>
      </div>
    )
  }
}

export default Pay