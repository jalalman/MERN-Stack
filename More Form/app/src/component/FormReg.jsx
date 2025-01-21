import '../css/FormReg.css';
import React, { useState } from 'react';

function FromReg(props) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailMes, setEmailMes] = useState('');
    const [firstnameMes, setFirstnameMes] = useState('');
    const [lastnameMes, setLastnameMes] = useState('');
    const [confirmPasswordMes, setConfirmPasswordMes] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [passwordMes, setPasswordMes] = useState('');
    
    
    const createUser = (e) => {
        e.preventDefault();
        if (firstname.length < 2) {
            setFirstnameMes("First Name must be at least 2 characters");
            
        } else {
            setFirstnameMes(false);
        }
        if (lastname.length < 2) {
            setLastnameMes("Last Name must be at least 2 characters");
            
        }
        else{
            setLastnameMes(false);
        }
        if (password.length < 8) {
            setPasswordMes("Password must be at least 8 characters");
            
        } else {
            setPasswordMes(false);
        }
        if (password !== confirmPassword) {
            setConfirmPasswordMes("Password must match");
            
        } else {
            setConfirmPasswordMes(false);
        }
        if(email.length < 2) {
            setEmailMes("Email must be at least 2 characters");
          

        }
        else {
            setEmailMes(false);
        }
        const newUser = { firstname, lastname, password, email };
        console.log("Welcome", newUser);
        
        setFirstname('');
        setLastname('');
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

    function handleFirstname(e) {
        setFirstname(e.target.value);
    }
    function handleLastname(e) {
        setLastname(e.target.value);
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
                        <label htmlFor="firstname">FirstName: </label>
                        <input type="text" className="form-control" value={firstname} onChange={handleFirstname} />
                        <p style={{ display: firstnameMes ? 'block' : 'none' }} className='text-danger'>{firstnameMes}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">LastName: </label>
                        <input type="text" className="form-control" value={lastname} onChange={handleLastname} />
                        <p style={{ display: lastnameMes ? 'block' : 'none' }} className='text-danger'>{lastnameMes}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type='password' className="form-control" value={password} onChange={handlePassword} />
                        <p style={{ display: passwordMes ? 'block' : 'none' }} className='text-danger'>{passwordMes}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type='password' className="form-control" value={confirmPassword} onChange={handleConfirmPassword} />
                        <p style={{ display: passwordMes ? 'block' : 'none' }} className='text-danger'>{passwordMes}</p>
                        <p style={{ display: confirmPasswordMes ? 'block' : 'none' }} className='text-danger'>{confirmPasswordMes}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" value={email} onChange={handleEmail} />
                        <p style={{ display: emailMes ? 'block' : 'none' }} className='text-danger'>{emailMes}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Create User</button>
                </form>
            </div>
        </>
    )
}

export default FromReg;