import styled from 'styled-components'

export const ItemMain = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ItemImg = styled.img`
  min-width: 250px;
  max-width: 250px;
  height: 150px;
  border-radius: 5px;
  @media (max-width: 768px) {
    height: 100px;
    min-width: 160px;
    max-width: 160px;
    left: 24px;
    top: 284px;
    border-radius: 5.0196075439453125px;
  }
`

export const ItemDetailsCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ItemName = styled.h1`
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  margin: 5px;
  @media (max-width: 768px) {
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }
`
export const RAndR = styled.div`
  display: flex;
  align-items: center;
`

export const Cost = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin: 3px;
  @media (max-width: 768px) {
    font-family: 'DM Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
`
export const Rating = styled.p`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  margin: 3px;
  @media (max-width: 768px) {
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
`
export const AddButton = styled.button`
  font-family: 'DM Sans';
  height: 32px;
  width: 58px;
  left: 1054px;
  top: 656px;
  border: 2px solid #ffa412;
  border-radius: 8px;
  color: #ffa412;
  background-color: transparent;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 23.999998092651367px;
    width: 44px;
    left: 200px;
    top: 481px;
    border-radius: 5px;
  }
`
export const AddCon = styled.div`
  height: 33px;
  display: flex;
  align-items: center;
`
