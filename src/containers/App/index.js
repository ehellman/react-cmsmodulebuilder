import React, { Component } from 'react'
import store from 'store'
import Navigation from 'components/Navigation'

import { styled } from 'styletron-react'
import globalStyles from 'globalStyles'

const Wrapper = styled('div', () => ({
  backgroundColor: globalStyles.colors.gray.light,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
}))

const Main = styled('div', () => ({
  maxWidth: globalStyles.sizes.pageWidth,
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  flex: '1 0 auto'
}))

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation />
        <Main>
          <button onClick={() => store.dispatch({ type: 'SAY_HELLO', text: 'sup' })}>hi</button>
          {this.props.children}
        </Main>
      </Wrapper>
    )
  }
}

export default App
