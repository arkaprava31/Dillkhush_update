import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Whatistbs from '../../components/whatistbs/Whatistbs'
import Choose from '../../components/Choose/Choose'
import Business from '../../components/business/Business'
import Testimonial from '../../components/testimonials/Testimonial'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <About />
        <Whatistbs />
        <Choose />
        <Business />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home