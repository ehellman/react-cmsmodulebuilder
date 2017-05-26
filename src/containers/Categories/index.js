import React from 'react'

import { BuildCMSModules } from 'hoc/BuildCMSModules'

export const PostTitle = ({ title }) => (
  <div>{title}</div>
)

export const PostBody = ({ body }) => (
  <div>{body}</div>
)

export const Post = ({title}) => {
  return (
    <div className='post'>
      Post
      <div>{title}</div>
    </div>
  )
}

const cmsData = [
  {
    id: 1,
    Component: Post,
    title: 'Post title from CMS',
    body: 'Post bodies are cool too'
  }
]


export default class CategoriesPage extends React.Component {
  render() {
    return (
      <div className='categories'>
        <h2>Categories</h2>
        {BuildCMSModules(cmsData)}
      </div>
    )
  }
}