import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import {
  NotFoundMain,
  NotFoundCon,
  NotHeading,
  NotCon,
  NotFoundBtn,
  NotImg,
} from './styledComponents'

class NotFound extends Component {
  toHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <NotFoundMain>
        <Header />
        <NotFoundCon>
          <NotImg
            alt="not found"
            src="https://res.cloudinary.com/dclxp4bb4/image/upload/v1633272770/tastyKitchen/erroring_1_osdvts.png"
          />
          <NotHeading>Page Not Found</NotHeading>
          <NotCon>
            we are sorry, the page you requested could not be found Please go
            back to the homepage
          </NotCon>
          <NotFoundBtn onClick={this.toHome} type="button">
            Home Page
          </NotFoundBtn>
        </NotFoundCon>
      </NotFoundMain>
    )
  }
}

export default withRouter(NotFound)
