import React from 'react'
import Card from './Card'

const Listing = ({posts}) => (
  <article>
    <ul className="list-unstyled">
      {posts.map(post => (
        <Card {...post} key={post._id}/>
      ))}
    </ul>
  </article>
)

export default Listing