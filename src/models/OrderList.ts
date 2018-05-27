export interface OrderListItem {
  id: string
  name: string
  quantity: number
  price: number
  img: string
}
export type OrderList = OrderListItem[]