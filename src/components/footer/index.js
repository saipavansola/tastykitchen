import {Component} from 'react'
import {
  FaPinterestSquare,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from 'react-icons/fa'

import {
  FooterMain,
  FooterLogo,
  FooterLogoCon,
  Motto,
  SocialNetworkIcon,
} from './styledComponents'

class Footer extends Component {
  render() {
    return (
      <FooterMain>
        <FooterLogoCon>
          <FooterLogo
            alt="website-footer-logo"
            src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1633020655/tastyKitchen/Group_7420_ervtdz.png"
          />
          <h1>Tasty Kitchen</h1>
        </FooterLogoCon>
        <Motto>The Only thing we are serious about is food</Motto>
        <SocialNetworkIcon>
          <FaPinterestSquare data-testid="pintrest-social-icon" />
          <FaInstagram data-testid="Instagram-social-icon" />
          <FaTwitter data-testid="twitter-social-icon" />
          <FaFacebookSquare data-testid="facebook-social-icon" />
        </SocialNetworkIcon>
      </FooterMain>
    )
  }
}
export default Footer
