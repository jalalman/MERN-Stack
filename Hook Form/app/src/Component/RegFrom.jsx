import '../css/RegForm.css';
import React, { useState } from 'react';

function RegForm() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleCreateUser(e) {
        e.preventDefault();
        const newUser = {
            firstname,
            lastname,
            email,
            password,
            confirmPassword
        };
        console.log(newUser);

        setFirstname('');
        setLastname('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
    }

    function handleFirstnameChange(e) {
        setFirstname(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handleLastnameChange(e) {
        setLastname(e.target.value);
    }
    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value);}

    return (
        <div className='reg-form'>
        <form onSubmit={handleCreateUser} className='reg-form'>
            <div>
                <input
                    type='text'
                    placeholder='first name'
                    value={firstname}
                    onChange={handleFirstnameChange}
                /><br />
                <input
                    type='text'
                    placeholder='last name'
                    value={lastname}
                    onChange={handleLastnameChange}
                /><br />
                <input
                    type='email'
                    placeholder='email'
                    value={email}
                    onChange={handleEmailChange}
                /><br />
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={handlePasswordChange}
                /><br />
                <input
                    type='password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                /><br />
                <input type='submit' value='Create a User' />
            </div>
        </form>
        <div>

            <h3>First name: {firstname}</h3>
            <h3>last name: {lastname}</h3>
            <h3>email: {email}</h3>
            <h3>password: {password}</h3>
            <h3>Confirm password: {confirmPassword}</h3>
        </div>
        </div>
        
    );
}

export default RegForm;