import React from 'react';
import '../styles/About.scss';
import Header from './Header';
import Footer from './Footer';
import ElementP from './elements/ElementP'

export default function About() {
  return (
    <div>
        <Header/>
        <div className='mainAbout'>
            
            <h2>header2</h2>
            <div className='headerAbout'>
                <ElementP/>
                <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
            </div>

            <h2>header2</h2>
            <div className='headerAbout'>
                 <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
                 <ElementP/>
            </div>

            <h2>header2</h2>
            <div className='headerAbout'>
                 <ElementP/>
                <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
            </div>

            <h2>header2</h2>
            <div className='headerAbout'>
                <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
                <ElementP/>
            </div>

            <h2>header2</h2>
            <div className='headerAbout'>
                 <ElementP/>
                <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
            </div>

            <h2>header2</h2>
            <div className='headerAbout'>
                <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
                <ElementP/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}