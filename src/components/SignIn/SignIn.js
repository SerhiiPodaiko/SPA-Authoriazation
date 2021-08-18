import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = (props) => {

    const {
        state: {name, email, password, formErrors},
        handleChange, history
    } = props;

    const validateForm = (email, password) => {
        return email && password.length >= 8
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateForm(email, password)) {
            history.push({
                pathname: '/main',
                state: { detail: name }
            })
        } else {
            alert('Data not filled');
        }
    };

    return (
        <div className='sign-in'>
            <h1 className='sign-in__title title'>
                Sign In
            </h1>
            <form className='sign-in-form' onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id="email"
                           className={formErrors.email.length > 0 ? 'error' : null}
                           value={email}
                           name='email'
                           onChange={handleChange}
                           placeholder='example@acme.com' />
                    {formErrors.email.length > 0 && (
                        <span className='errorMessage'>{formErrors.email}</span>
                    )}
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password'
                           className={formErrors.password.length > 0 ? 'error' : null}
                           value={password}
                           name='password'
                           onChange={handleChange} />
                    {formErrors.password.length > 0 && (
                        <span className='errorMessage'>{formErrors.password}</span>
                    )}
                </div>
                <button type='submit' className='sign-in-btn'>Sign In</button>
            </form>
            <p className='account'>
                Don’t have an account yet? <br/>
                <Link style={{ textDecoration: 'underline' }} to='/signup'>Sign Up</Link>
            </p>
        </div>
    )
}

export default SignIn;