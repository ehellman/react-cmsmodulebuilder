import { styled } from 'styletron-react'
import styles from 'styles'

export default styled('h1', (props) => ({
  fontSize: '32px',
  color: props.color ? props.color : styles.font.color.body
}))
