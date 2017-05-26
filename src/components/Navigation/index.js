import React, { Component } from 'react'

import { styled } from 'styletron-react'
import globalStyles from 'globalStyles'

import {
  Wrapper,
  Container,
  Logo,
  A,
  NavLink
} from './styles'

// const Wrapper = styled('header', (props) => ({
//   backgroundColor: globalStyles.colors.gray.dark,
//   display: 'flex'
// }))

// const Logo = styled('div', (props) => ({
//   width: globalStyles.sizes.nav.height,
//   height: globalStyles.sizes.nav.height,
//   backgroundColor: 'papayawhip'
// }))

const NavContainer = styled('nav', (props) => ({
  height: globalStyles.sizes.nav.height,
  padding: '20px',
  color: globalStyles.colors.white
}))


export default class Navigation extends Component {

  render() {
    return (
      <Wrapper>
        <Container>
          <Logo>
            X24
          </Logo>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </Container>
      </Wrapper>
    )
  }

}
