import styled from 'styled-components'

export const HomeMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Caption = styled.p`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #64748b;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const OfferImg = styled.img`
  width: 100%;
`
export const OffersLoader = styled.div`
  width: 100%;
  display: flex;
  padding: 168px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 60px;
  }
`

export const OffersList = styled.ul`
  width: 80%;
  padding: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const OffersMain = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  height: 45%;
`
export const DealsMain = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    width: 95%;
  }
`
export const DealsHeading = styled.h1`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #183b56;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
export const SortCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`
export const SelectAndSort = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
export const Select = styled.select`
  border: none;
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #475569;
  background-color: transparent;
`
export const RestaurantImage = styled.img`
  min-width: 130px;
  max-width: 130px;
  height: 90px;
  border-radius: 10px;
`
export const RestaurantItemCon = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
`

export const Item = styled.li`
  height: 100px;
  margin-bottom: 10px;
  width: 33%;
  margin-left: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const RestaurantName = styled.h1`
  font-family: 'DM Sans';
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: #334155;
  margin: 0;
`

export const FastFood = styled.p`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 14px;
  color: #64748b;
  margin: 0;
`
export const RatingCon = styled.div`
  display: flex;
  align-items: center;
`
export const Rating = styled.p`
  margin: 0;
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
`

export const DetailsCon = styled.div`
  display: flex;
  height: 100px;
  padding: 5px;
  flex-direction: column;
  justify-content: space-around;
`
export const RestaurantsCon = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const PageNav = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
`
export const PageBtn = styled.button`
  border: solid 1px #334155;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  cursor: pointer;
`
export const RestaurantsMainCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
