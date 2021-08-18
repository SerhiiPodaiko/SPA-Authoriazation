import React from 'react';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {

    validateForm(name, email, password, repeatPassword) {
        return name && email &&
            password.length >= 8 &&
            repeatPassword.length >= 8 &&
            password === repeatPassword;
    }

    render() {
        const {
            state: {name, email, password, repeatPassword, formErrors},
            handleChange, history
        } = this.props;

        const onSubmit = () => {
                if (this.validateForm(name, email, password, repeatPassword)) {
                    history.push({
                        pathname: '/main',
                        state: { detail: name }
                    })
                } else {
                    alert('Data not filled');

                }
        };

        return (
            <div className='sign-up'>
                <h1 className='sign-up__title title'>
                    Sign Up
                </h1>
                <form className='sign-up-form' onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Full name</label>
                        <input type='text' id='name'
                               className={formErrors.name.length > 0 ? 'error' : null}
                               value={name}
                               name='name'
                               onChange={handleChange}
                               placeholder='John Doe'/>
                        {formErrors.name.length > 0 && (
                            <span className='errorMessage'>{formErrors.name}</span>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id="email"
                               className={formErrors.email.length > 0 ? 'error' : null}
                               value={email}
                               name='email'
                               onChange={handleChange}
                               placeholder='example@acme.com'/>
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
                               onChange={handleChange}
                        />
                        {formErrors.password.length > 0 && (
                            <span className='errorMessage'>{formErrors.password}</span>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='repeat-password'>Repeat password</label>
                        <input type='password' id='repeat-password'
                               className={formErrors.repeatPassword.length > 0 ? 'error' : null}
                               value={repeatPassword}
                               name='repeatPassword'
                               onChange={handleChange}
                        />
                        {formErrors.repeatPassword.length > 0 && (
                            <span className='errorMessage'>{formErrors.repeatPassword}</span>
                        )}
                    </div>
                    <button className='sign-up-btn'>Sign Up</button>
                </form>
                <p className='account'>
                    Already have an account? <br/>
                    <Link style={{textDecoration: 'underline'}} to="/signin">Sign In</Link>
                </p>
            </div>
        )
    }
}

export default SignUp;


