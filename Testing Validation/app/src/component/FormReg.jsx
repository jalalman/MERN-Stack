import '../css/FormReg.css';
import React, { useState } from 'react';

function FromReg(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [usernameMes, setUsernameMes] = useState('');
    const [confirmPasswordMes, setConfirmPasswordMes] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        if (username.length < 8) {
            setUsernameMes("Password must be at least 8 characters");
        } else {
            setUsernameMes(false);
        }
        if (password !== confirmPassword) {
            setConfirmPasswordMes("Password must match");
        } else {
            setConfirmPasswordMes(false);
        }
        const newUser = { username, password, email };
        console.log("Welcome", newUser);
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
        setHasBeenSubmitted(true);
        message();
    }

    function message() {
        if (hasBeenSubmitted) {
            console.log("Thank you for submitting the form");
        } else {
            console.log("Please fill out the form");
        }
    }

    function handleUsernmae(e) {
        setUsername(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleConfirmPassword(e) {
        setConfirmPassword(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <>
            <div className="container mt-5">
                <h1>Register</h1>
                <form onSubmit={createUser}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" value={username} onChange={handleUsernmae} />
                        <p style={{ display: usernameMes ? 'block' : 'none' }} className='text-danger'>{usernameMes}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type='password' className="form-control" value={password} onChange={handlePassword} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type='password' className="form-control" value={confirmPassword} onChange={handleConfirmPassword} />
                        <p style={{ display: confirmPasswordMes ? 'block' : 'none' }} className='text-danger'>{confirmPasswordMes}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" value={email} onChange={handleEmail} />
                    </div>
                    <button type="submit" className="btn btn-primary">Create User</button>
                </form>
            </div>
        </>
    )
}

export default FromReg;