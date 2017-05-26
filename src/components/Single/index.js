import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from 'components/Article'




class Single extends Component {
  componentDidMount() {
    // successfully passed props on Link, not on browse
    // maybe grab post data here, or find another way?
    // this.post = this.props.posts[this.props.]
  }
  render() {
    return (
      <div>single</div>
    )
  }

}

// <Article
//   key={post.id}
//   title={post.title.rendered}
//   content={post.content.rendered}
//   date={post.date.split('T').join(' ')}
//   featured={post.better_featured_image}
// />

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Single)
