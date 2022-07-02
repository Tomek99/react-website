import React from 'react'
import Header from './Header';
import '../styles/Denim.scss';
import Footer from './Footer';

export default function Denim() {
    return (
        <div>
            <Header />
            <div className='denim-section'>
                <div className='headerDenim'>
                    <h1>Denim Collection</h1>
                    <p>Available in 2022</p>
                </div>
                <div className='look'>
                    <p>We have 50% off for all products</p>
                    <button>Take a look</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
