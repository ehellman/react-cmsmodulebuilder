import React, { Component } from 'react'
import { styled } from 'styletron-react'
import globalStyles from 'globalStyles'

const Wrapper = styled('section', (props) => ({
  border: '2px solid lime'
}))


export default () => (
  <Wrapper>
    ArticleList
  </Wrapper>
)
