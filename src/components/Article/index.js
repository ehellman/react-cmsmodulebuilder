import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

export default ({ id, title, content, date, author, featured }) => {
  const featuredImage = featured
    ? <img
        src={featured.media_details.sizes.medium.source_url}
        alt={featured.alt_text}
      />
    : ''
  return (
    <article>
      <small>{date}</small>
      <Link to={`/post/${id}`}><h3>{title}</h3></Link>
      {featuredImage}
      <ReactMarkdown source={content} />
    </article>
  )
}
