import React from 'react'
import "./Blogs.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Blog = () => {
  return (
    <div>
       <Navbar />
       <div className='blogscontainer'>
        <div className='categorydiv'>
          <div className='cattitle'>
            <span>Categories</span>
            <hr />
            <div className='catbuttons'>
              <button className='catbut'>All</button>
              <button className='catbut'>Marketing Trends</button>
              <button className='catbut'>Content Strategy</button>
              <button className='catbut'>Social Media</button>
              <button className='catbut'>SEO</button>
              <button className='catbut'>Email Marketing</button>
              <button className='catbut'>Branding</button>
              <button className='catbut'>Case Studeis</button>
            </div>
          </div>
        </div>
        <div className='blogcards'>
          <div className='blogcard'>

          </div>
        </div>
       </div>
       <Footer /> 
    </div>
  )
}

export default Blog;