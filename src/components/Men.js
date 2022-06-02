import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/Men.scss'
function Men() {
  return (
    <div>
        <Header/>
        <div className='men-section'>
            <div className='headerMen'>
                <h1>Men Collection</h1>
                <p>Available in 2022</p>
            </div>
            <div className='look'>
                <p>We have 50% off for all products</p>
                <button>Take a look</button>
             </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Men