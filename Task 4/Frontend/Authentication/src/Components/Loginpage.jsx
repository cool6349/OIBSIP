import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'

export const Loginpage = () => {
    const [logindata, setLoginData] = useState({
        username: '',
        password: '',

    })

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post
                ('http://localhost:8000/login', logindata);
            const { success, message } = response.data;

            if (success) {
                console.log('Login Successfully');

            }

            else {
                console.log(message);

            }
        }
        catch (error) {
            console.log('login error', error);

        }
        setLoginData({
            username: '',
            password: ''
        })
    }


    const handleLoginChange = (e) => {

        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }


    return (
        <div className='logincontainer'>
            <h1>Login</h1>
            <form className='formcontainer'onSubmit={handleLoginSubmit}>
                <input type='text'
                    name='username'
                    placeholder='Username'
                    value={logindata.username}
                    onChange={handleLoginChange}
                    required />

                <input type='password'
                    name='password'
                    placeholder='Password'
                    value={logindata.password}
                    onChange={handleLoginChange}
                    required />


                <button type='submit'>Login</button>
                <p>Not Registered yet?
                    <Link to='/register'>Register</Link>
                </p>
            </form>
        </div>
    )
}


export default Loginpage;