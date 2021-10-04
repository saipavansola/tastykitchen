import styled from 'styled-components'

export const CartCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const EmptyImg = styled.img`
  width: 30%;
`

export const NoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoOrder = styled.h1`
  font-family: 'DM Sans';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: center;
  @media (max-width: 768px) {
    font-family: 'DM Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
  }
`
export const Empty = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  @media (max-width: 768px) {
    font-family: 'DM Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
  }
`
export const OrderBtn = styled.button`
  height: 32px;
  width: 93px;
  left: 0px;
  top: 0px;
  border: none;
  border-radius: 8px;
  padding: 8px, 16px, 8px, 16px;
  color: #ffffff;
  background-color: #f7931e;
  font-family: 'DM Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 32px;
    width: 93px;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    padding: 8px, 16px, 8px, 16px;
  }
`
export const CartMain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`
export const TotalPriceCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`
export const PriceCon = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f9fbfe;
  @media (max-width: 768px) {
    width: 100%;
    background: #ffffff;
  }
`
export const PriceLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
`
export const Cost = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #3e4c59;
`

export const Rupees = styled.div`
  font-family: 'DM Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: right;
  display: flex;
  align-items: center;
`
export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px dashed #cbd2d9;
  color: #fff;
  background-color: #fff;
  height: 1px;
`
export const CartHeading = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  font-family: 'DM Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  padding: 0;
  letter-spacing: 0.20000000298023224px;
  @media (max-width: 786px) {
    display: none;
  }
`
export const CartItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const CartItemLi = styled.li`
  padding: 0;
  width: 90%;
  margin-bottom: 10px;
`
export const PlaceOrder = styled.button`
  height: 32px;
  width: 99px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  padding: 8px, 16px, 8px, 16px;
  background-color: #f7931e;
  font-family: 'DM Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
  border: none;
  color: #ffffff;
  align-self: flex-end;
  position: relative;
  left: -13.5%;
`

export const PaymentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0px 4.0073394775390625px 40.073394775390625px 0px #171f4629;
  @media (max-width: 768px) {
    width: 300px;
    padding: 40px;
  }
`
export const PayHeading = styled.h1`
  font-family: 'DM Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;

  @media (max-width: 768px) {
    font-family: 'DM Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
  }
`
export const ThankU = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  @media (max-width: 768px) {
    font-family: 'DM Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
  }
`
export const HomeBtn = styled.button`
  height: 32px;
  width: 131px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  padding: 8px, 16px, 8px, 16px;
  font-family: 'DM Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  background-color: #f7931e;
  color: #ffffff;
  border: none;
  cursor: pointer;
`
