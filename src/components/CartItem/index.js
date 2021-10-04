import {Component} from 'react'
import {BiRupee} from 'react-icons/bi'
import Counter from '../CounterQuantity'
import MainContext from '../../context/MainContext'
import {
  CartItemMain,
  CartItemImg,
  CartItemName,
  CartItemCost,
  QAndP,
  CounterComp,
} from './styledComponents'

class CartItem extends Component {
  renderCartItemCount = name => (
    <MainContext.Consumer>
      {value => {
        const {cartList, increaseCount, decreaseCount} = value
        const incItemCount = () => {
          const {item} = this.props
          increaseCount(item.name)
        }
        const decItemCount = () => {
          const {item} = this.props
          decreaseCount(item.name)
        }
        const itemInCart = cartList.filter(each => each.name === name)

        return (
          <Counter
            id={itemInCart[0].id}
            incCount={incItemCount}
            decCount={decItemCount}
            count={itemInCart[0].count}
          />
        )
      }}
    </MainContext.Consumer>
  )

  render() {
    const {item} = this.props
    return (
      <CartItemMain>
        <CartItemImg alt="foodItem" src={item.imageUrl} />
        <QAndP>
          <CartItemName>{item.name}</CartItemName>
          <CounterComp>{this.renderCartItemCount(item.name)}</CounterComp>
          <CartItemCost>
            <BiRupee />
            {item.count * item.cost}.00
          </CartItemCost>
        </QAndP>
      </CartItemMain>
    )
  }
}
export default CartItem
