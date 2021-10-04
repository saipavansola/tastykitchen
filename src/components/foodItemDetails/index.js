import {Component} from 'react'

import {BiRupee} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'

import {
  ItemMain,
  ItemImg,
  ItemDetailsCon,
  RAndR,
  ItemName,
  Cost,
  Rating,
  AddButton,
  AddCon,
} from './styledComponents'

import MainContext from '../../context/MainContext'
import Counter from '../CounterCount'

class FoodItemDetails extends Component {
  renderCount = name => (
    <MainContext.Consumer>
      {value => {
        const {cartList, increaseCount, decreaseCount, onAddToCart} = value
        const AddItem = () => {
          const {item} = this.props
          const newItem = {
            cost: item.cost,
            id: item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            count: 1,
          }
          onAddToCart(newItem)
        }

        const incItemCount = () => {
          const {item} = this.props
          increaseCount(item.name)
        }
        const decItemCount = () => {
          const {item} = this.props
          decreaseCount(item.name)
        }
        const itemInCart = cartList.filter(each => each.name === name)
        if (itemInCart.length !== 0) {
          return (
            <Counter
              incCount={incItemCount}
              decCount={decItemCount}
              count={itemInCart[0].count}
            />
          )
        }
        return (
          <AddButton onClick={AddItem} type="button">
            ADD
          </AddButton>
        )
      }}
    </MainContext.Consumer>
  )

  render() {
    const {item} = this.props
    return (
      <ItemMain>
        <ItemImg alt="foodItem" src={item.imageUrl} />
        <ItemDetailsCon>
          <ItemName>{item.name}</ItemName>
          <RAndR>
            <BiRupee /> <Cost>{item.cost}</Cost>
          </RAndR>
          <RAndR>
            <AiFillStar color="#FFCC00" /> <Rating>{item.rating}</Rating>
          </RAndR>
          <AddCon>{this.renderCount(item.name)}</AddCon>
        </ItemDetailsCon>
      </ItemMain>
    )
  }
}

export default FoodItemDetails
