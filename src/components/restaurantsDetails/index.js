import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

import {
  DetailsMain,
  RestaurantMain,
  RestaurantBanner,
  BannerDetails,
  RattingANdRupee,
  BannerBottom,
  BannerImg,
  BannerName,
  BannerCuisine,
  BannerRating,
  BannerReviews,
  BannerInner,
  FoodList,
  FoodItemCon,
  RestaurantsDetailsLoader,
} from './styledComponents'

import Header from '../Header'
import FoodItemDetails from '../foodItemDetails'
import Footer from '../footer'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class RestaurantDetails extends Component {
  state = {
    detailsApiStatus: apiStatusConstants.initial,
    restaurantDetails: [],
    foodItems: [],
  }

  componentDidMount() {
    this.getRestaurantsDetails()
  }

  getRestaurantsDetails = async () => {
    this.setState({detailsApiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedDetails = [data].map(each => ({
        name: each.name,
        cuisine: each.cuisine,
        location: each.location,
        rating: each.rating,
        imageUrl: each.image_url,
        reviews: each.reviews_count,
        costForTwo: each.cost_for_two,
      }))
      const formattedFoodItems = [data].map(each =>
        each.food_items.map(item => ({
          cost: item.cost,
          foodType: item.food_type,
          id: item.id,
          imageUrl: item.image_url,
          name: item.name,
          rating: item.rating,
        })),
      )
      this.setState({
        detailsApiStatus: apiStatusConstants.success,
        restaurantDetails: formattedDetails,
        foodItems: formattedFoodItems,
      })
    }
  }

  RenderFoodListSuccess = () => {
    const {restaurantDetails, foodItems} = this.state
    return (
      <RestaurantMain>
        <RestaurantBanner>
          <BannerInner>
            <BannerImg alt="restaurant" src={restaurantDetails[0].imageUrl} />
            <BannerDetails>
              <BannerName>{restaurantDetails[0].name}</BannerName>
              <BannerCuisine>{restaurantDetails[0].cuisine}</BannerCuisine>
              <BannerCuisine>{restaurantDetails[0].location}</BannerCuisine>
              <BannerBottom>
                <div>
                  <RattingANdRupee>
                    <AiFillStar />
                    <BannerRating>{restaurantDetails[0].rating}</BannerRating>
                  </RattingANdRupee>
                  <BannerReviews>
                    {restaurantDetails[0].reviews}+ Ratings
                  </BannerReviews>
                </div>
                <hr />
                <div>
                  <RattingANdRupee>
                    <BiRupee />
                    <BannerRating>
                      {restaurantDetails[0].costForTwo}
                    </BannerRating>
                  </RattingANdRupee>
                  <BannerReviews>Cost for two</BannerReviews>
                </div>
              </BannerBottom>
            </BannerDetails>
          </BannerInner>
        </RestaurantBanner>
        <FoodList>
          {foodItems[0].map(each => (
            <FoodItemCon data-testid="foodItem" key={each.id}>
              <FoodItemDetails item={each} />
            </FoodItemCon>
          ))}
        </FoodList>
        <Footer />
      </RestaurantMain>
    )
  }

  renderFoodItemsList = () => {
    const {detailsApiStatus} = this.state
    switch (detailsApiStatus) {
      case apiStatusConstants.success:
        return this.RenderFoodListSuccess()
      case apiStatusConstants.inProgress:
        return (
          <RestaurantsDetailsLoader data-testid="restaurant-details-loader">
            <div className="products-loader-container">
              <Loader type="Oval" color="#F7931E" height="50" width="50" />
            </div>
          </RestaurantsDetailsLoader>
        )
      case apiStatusConstants.failure:
        return <h1>fail</h1>
      default:
        return null
    }
  }

  render() {
    return (
      <DetailsMain>
        <Header />
        <div>{this.renderFoodItemsList()}</div>
      </DetailsMain>
    )
  }
}

export default RestaurantDetails
