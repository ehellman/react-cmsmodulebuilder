import React, { Component } from 'react'
import Article from 'components/Article'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'

//erikhellman.dev:8888/wp-json/wp/v2/posts




class BlogPage extends Component {
  componentDidMount() {
    // url to local wordpress install to test connection
    this.props.grabPosts('http://erikhellman.dev:8888/wp-json/wp/v2/posts?_embed')
  }
  render() {
    // console.log('props', this.props)
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    console.log('looks like success', this.props.posts[1])
    return (
      <div>
        Blog Page
        {this.props.posts.map((post) => (
          <Article
            key={post.id}
            id={post.id}
            title={post.title.rendered}
            content={post.content.rendered}
            date={post.date.split('T').join(' ')}
            featured={post.better_featured_image}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.posts,
    hasErrored: state.fetchPostsHasErrored,
    isLoading: state.fetchPostsIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    grabPosts: (url) => dispatch(fetchPosts(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)
