import styled from 'styled-components'

export const DetailsMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const RestaurantBanner = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  height: 350px;
  background-image: url('https://res.cloudinary.com/dclxp4bb4/image/upload/v1633100765/tastyKitchen/Rectangle_1399_nsewd4.png');
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
    height: 188px;
    overflow: hidden;
  }
`
export const BannerInner = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: -50px;
  }
`
export const RattingANdRupee = styled.div`
  display: flex;
  align-items: center;
`
export const BannerBottom = styled.div`
  display: flex;
  margin-top: 5px;
  width: 200px;
`
export const BannerImg = styled.img`
  width: 400px;
  height: 270px;
  border-radius: 5px;
  @media (max-width: 768px) {
    height: 221px;
    width: 221px;
    position: relative;
    left: -68px;
    top: -34px;
    border-radius: 133.9812469482422px;
  }
`
export const BannerName = styled.h1`
  margin: 5px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 36px;
  letter-spacing: 0.2px;
  @media (max-width: 768px) {
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }
`
export const BannerCuisine = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin: 5px;
  @media (max-width: 768px) {
    font-family: 'Roboto';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
`
export const BannerRating = styled.p`
  font-family: 'DM Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: bolder;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  margin: 5px;
  @media (max-width: 768px) {
    font-family: 'DM Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
`
export const BannerReviews = styled.p`
  font-family: 'DM Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  margin: 5px;
  @media (max-width: 768px) {
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
`
export const FoodList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  width: 80%;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    padding-left: 30px;
  }
`
export const RestaurantMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FoodItemCon = styled.li`
  width: 40%;
  height: 150px;
  margin-bottom: 20px;
  margin-left: 0;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
  }
`
export const RestaurantsDetailsLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`
