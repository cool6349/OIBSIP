import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Registration.css';

export const Registration = () => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password:''
        
    })
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    // const handleValidation = (e) => {
    //     e.preventDefault()
    //     const refg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-ZA-Z0-9]{8,}$/
    //     if (password === '') {
    //         setMessage("please enter password");
    //     }

    //     else if (refg.test(password)) {
    //         setMessage("password is valid");
    //     }
    //     else if (!refg.test(password)) {
    //         setMessage("password is not valid");
    //     }
    //     else {
    //         setMessage('');
    //     }

    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', registrationData);
            console.log(response.data);
            console.log("Registration succesful");


        }
        catch (error) {
            console.log(error);

        }

        setRegistrationData({
            username: '',
            password: ''
        })
    }

    const handleChange = (e) => {


        const { name, value } = e.target;

        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }

    return (
        <div className='rcontainer'>
            <h1>Registration </h1>
            <form className='econtainer1' onSubmit={handleSubmit}>
                <input type='text'
                    name='username'
                    placeholder='Username'
                    value={registrationData.username}
                    onChange={handleChange}
                    required
                />

                <input type='password'
                    name='password'
                    placeholder='Password'
                    value={registrationData.password}
                    onChange={handleChange}
                    // onSubmit={handleValidation}
                    required
                />
              {/* <p>{message}</p> */}
                <button type='submit'>Register</button>
                <p>
                    Already registered?
                    <Link to='/login'>Login here</Link>
                </p>
            </form>
        </div>
    )
}


export default Registration;