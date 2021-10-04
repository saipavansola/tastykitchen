import styled from 'styled-components'

export const FooterMain = styled.div`
  background-color: #0f172a;
  width: 100%;
  margin-top: 50px;
  color: #ffffff;
  padding: 50px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FooterLogoCon = styled.div`
  display: flex;
  align-items: center;
  font-family: 'DM Sans';
  font-size: 32px;
  font-style: italic;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
export const FooterLogo = styled.img`
  width: 80px;
  @media (max-width: 768px) {
    width: 40px;
  }
`
export const Motto = styled.p`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 14px;
    align-content: center;
  }
`
export const SocialNetworkIcon = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 60%;
    font-size: 30px;
  }
`
