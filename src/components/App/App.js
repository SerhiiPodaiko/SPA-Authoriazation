import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EnterScreen from '../EnterScreen';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Main from "../Main";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class App extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        formErrors: {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        }
    }

    validation = (formErrors, name, value) => {
        switch (name) {
            case 'name':
                formErrors.name = value.length < 3 ? 'Minimum 3 characters required' : ''
                break;
            case 'email':
                formErrors.email =
                    emailRegex.test(value) ? '' : 'invalid email address'
                break;
            case 'password':
                formErrors.password = value.length < 8 ? 'Minimum 8 characters required' : ''
                break;
            case 'repeatPassword':
                formErrors.repeatPassword = value.length < 8 ? 'Minimum 8 characters required' : '';
                break;
            default:
                break;
        }
    };

    handleChange = ({target}) => {
        const {name, value} = target;
        let formErrors = this.state.formErrors;

        this.validation(formErrors, name, value);

        this.setState({formErrors, [name]: value})
    };

    render() {
        const state = this.state;
        return (
            <Router>
                <Route exact path='/' component={EnterScreen}/>

                <Route path='/signup' render={(props) =>
                    <SignUp state={state}
                            {...props}
                            handleChange={this.handleChange}/>}/>

                <Route path='/signin' render={(props) =>
                    <SignIn state={state}
                            {...props}
                            handleChange={this.handleChange}/>}/>

                <Route path='/main' component={Main}/>
            </Router>
        )
    }
}

export default App;
