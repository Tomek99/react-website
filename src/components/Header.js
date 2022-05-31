import React from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined, ShoppingBasket } from '@material-ui/icons'

function Header() {
  return (
    <div className='header'>
        <nav>
            <ul className="ui-items">
                <li className="li-items">
                    <Link to='/women'>Women</Link>
                    <Link to='/women'>Men</Link>
                    <Link to='/women'>Denim</Link>
                    <Link to='/women'>The Gift Shop</Link>
                    <Link to='/women'>About</Link>
                </li>
            </ul>
            <div className="logo">
                <h1>Eshopland</h1>
            </div>

            <div className="right">
                <div className="search">
                    <SearchOutlined className="search-icon"/>
                    <button>Search</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header