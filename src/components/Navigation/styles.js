import { Link } from 'react-router-dom'
import { styled } from 'styletron-react'
import globalStyles from 'globalStyles'

export const Wrapper = styled('div', (props) => ({
  backgroundColor: '#fff',
  boxShadow: '0px 1px 4px rgba(0,0,0,.1)'
}))

export const Container = styled('nav', (props) => ({
  padding: '10px 40px',
  maxWidth: globalStyles.sizes.pageWidth,
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center'
}))

export const Logo = styled('div', (props) => ({
  backgroundColor: props.color ? props.color : '#333',
  color: '#fff',
  marginRight: globalStyles.sizes.spacing.medium,
  fontFamily: 'BlinkMacSystemFont',
  fontSize: '12px',
  fontWeight: '800',
  padding: '10px',
  boxShadow: '0px 1px 4px rgba(0,0,0,.1)'
}))

export const A = styled(Link, (props) => ({
  color: '#333',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textDecoration: 'none',
  fontFamily: 'BlinkMacSystemFont',
  fontWeight: '600',
  fontSize: '14px'
}))

export const NavLink = styled(A, (props) => ({
  marginRight: globalStyles.sizes.spacing.medium
}))
