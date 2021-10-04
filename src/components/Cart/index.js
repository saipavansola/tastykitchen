import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
import {FaCheckCircle} from 'react-icons/fa'
import MainContext from '../../context/MainContext'
import Header from '../Header'
import Footer from '../footer'
import CartItem from '../CartItem'

import {
  CartMain,
  CartCon,
  NoItem,
  NoOrder,
  Empty,
  OrderBtn,
  EmptyImg,
  TotalPriceCon,
  PriceCon,
  PriceLine,
  Cost,
  Rupees,
  Hr,
  CartHeading,
  CartItemsList,
  CartItemLi,
  PlaceOrder,
  PaymentMain,
  PayHeading,
  ThankU,
  HomeBtn,
} from './styledComponents'

class Cart extends Component {
  state = {
    orderPlace: false,
  }

  onOrderNow = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderCart = () => (
    <MainContext.Consumer>
      {value => {
        const {cartList, clearCartList} = value
        const {orderPlace} = this.state
        const totalCost = () => {
          const priceList = cartList.map(each => each.count * each.cost)
          const reducer = (previousValue, currentValue) =>
            previousValue + currentValue
          const price = priceList.reduce(reducer)
          return <Rupees data-testid="total-price">{`${price}.00`}</Rupees>
        }
        const onOrderPlaced = () => {
          localStorage.clear()
          this.setState(prevState => ({
            orderPlace: !prevState.orderPlace,
          }))
          clearCartList()
        }

        if (cartList.length === 0 && orderPlace === false) {
          return (
            <NoItem>
              <EmptyImg
                alt="empty cart"
                src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1633225925/tastyKitchen/Layer_2_pt2cfs.png"
              />
              <NoOrder>No Orders Yet!</NoOrder>
              <Empty>Your cart is empty. Add something from the menu.</Empty>
              <OrderBtn onClick={this.onOrderNow} type="button">
                Order Now
              </OrderBtn>
            </NoItem>
          )
        }

        if (orderPlace) {
          return (
            <div>
              <PaymentMain>
                <FaCheckCircle fontSize={45} color="#22C55E" />
                <PayHeading>Payment Successful</PayHeading>
                <ThankU>
                  Thank you for ordering <br /> Your payment is successfully
                  completed.
                </ThankU>
                <HomeBtn type="button" onClick={this.onOrderNow}>
                  Go To Home Page
                </HomeBtn>
              </PaymentMain>
            </div>
          )
        }
        return (
          <TotalPriceCon>
            <PriceCon>
              <CartHeading>
                <li>Item</li>
                <li>Quantity</li>
                <li>Price</li>
              </CartHeading>
              <CartItemsList>
                {cartList.map(each => (
                  <CartItemLi key={each.id}>
                    <CartItem item={each} />
                  </CartItemLi>
                ))}
              </CartItemsList>
              <Hr />
              <PriceLine>
                <Cost>Order Total :</Cost>
                <Rupees>
                  <BiRupee /> {totalCost()}
                </Rupees>
              </PriceLine>
              <PlaceOrder onClick={onOrderPlaced} type="button">
                Place Order
              </PlaceOrder>
            </PriceCon>
            <Footer />
          </TotalPriceCon>
        )
      }}
    </MainContext.Consumer>
  )

  render() {
    return (
      <CartMain>
        <Header />
        <CartCon>{this.renderCart()}</CartCon>
      </CartMain>
    )
  }
}

export default withRouter(Cart)
