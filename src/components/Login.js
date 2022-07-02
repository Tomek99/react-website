import React from 'react'
import '../styles/Login.scss'


const Login = () => {
    return (
        <div className='forms'>
            <form action="">
                <label htmlFor="">email</label>
                <input type="text" name="" id="" placeholder='Login' />

                <label htmlFor="">password</label>
                <input type="password" placeholder='Password' />

                <button type='submit'>Next</button>
            </form>
        </div>
    )
}

export default Login