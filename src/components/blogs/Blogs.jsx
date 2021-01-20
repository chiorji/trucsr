import React, {useEffect, useState, Suspense} from 'react'
import Title from '../global/Title'
import Listing from './Listing'
import Utils from '../../utils/'

const Blogs = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    Utils.getResource('posts').then(res => {
      setPosts(res.data.posts)
    }).catch(err => {
      console.error(err)
    })

  }, [])

  return (
    <section className="container-fluid bg-white py-5">
      <div className="container">
         <div className="row">
        <div className="col-12 col-md-10 mx-auto text-center">
          <Title text='BLOG' className=' d-flex align-items-center justify-content-center'/>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-10 mx-auto">
          <Suspense fallback={<p className='text-danger lead'>Loading posts...</p>}>
            <Listing posts={posts}/>
          </Suspense>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Blogs