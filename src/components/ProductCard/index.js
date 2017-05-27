import React from 'react'

const ProductCardTitle = ({ title }) => (
  <div>{title}</div>
)

const ProductCardBody = ({ body }) => (
  <div>{body}</div>
)

export default ({ title, body }) => {
  return (
    <div className='product-card'>
      ProductCard
      <ProductCardTitle title={title} />
      <ProductCardBody body={body} />
    </div>
  )
}