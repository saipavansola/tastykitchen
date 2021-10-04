import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'

import {
  LogoTitle,
  LinksCon,
  LogoImg,
  LogOutBtn,
  LogCon,
  HearCon,
  HeaderMain,
  HeaderItems,
  HamburgerBtn,
  SmallMenu,
  SmallLinks,
} from './styledComponents'

class Header extends Component {
  state = {
    activeLink: 'Home',
    showNavMenu: false,
  }

  onHome = () => {
    this.setState({activeLink: 'Home'})
  }

  onCart = () => {
    this.setState({activeLink: 'Cart'})
  }

  onLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  onShowNav = () => {
    this.setState(prevState => ({
      showNavMenu: !prevState.showNavMenu,
    }))
  }

  render() {
    const {activeLink, showNavMenu} = this.state
    return (
      <HeaderMain show={showNavMenu}>
        <HearCon>
          <Link style={{textDecoration: 'none'}} to="/">
            <LogCon>
              <LogoImg
                width={40}
                alt="website logo"
                src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1632732181/tastyKitchen/Group_7420_vfqhmf.png"
              />
              <LogoTitle>Tasty Kitchens</LogoTitle>
            </LogCon>
          </Link>
          <HamburgerBtn onClick={this.onShowNav} type="button">
            <GiHamburgerMenu />
          </HamburgerBtn>
          <LinksCon>
            <HeaderItems>
              <li>
                <Link
                  onClick={this.onHome}
                  style={{
                    color: activeLink === 'Home' ? '#F7931E' : '#334155',
                    textDecoration: 'none',
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.onCart}
                  style={{
                    color: activeLink === 'Cart' ? '#F7931E' : '#334155',
                    textDecoration: 'none',
                  }}
                  to="/cart"
                >
                  Cart
                </Link>
              </li>
            </HeaderItems>

            <LogOutBtn onClick={this.onLogOut} type="button">
              Logout
            </LogOutBtn>
          </LinksCon>
        </HearCon>
        {showNavMenu ? (
          <SmallMenu>
            <SmallLinks>
              <Link
                onClick={this.onHome}
                style={{
                  color: activeLink === 'Home' ? '#F7931E' : '#334155',
                  textDecoration: 'none',
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={this.onCart}
                style={{
                  color: activeLink === 'Cart' ? '#F7931E' : '#334155',
                  textDecoration: 'none',
                }}
                to="/cart"
              >
                Cart
              </Link>
            </SmallLinks>
            <AiFillCloseCircle />
          </SmallMenu>
        ) : null}
      </HeaderMain>
    )
  }
}

export default withRouter(Header)
