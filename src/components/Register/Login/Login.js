import React, { Component } from 'react';
import classes from './Login.module.css'
import axios from 'axios'
import Input from '../../Checkout/input'
import Button from '../../Checkout/buttoncheckout'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Login extends Component {
 
  state = {
    
     loginForm: {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Your Password'
            },
            value: '',
            validation: {
                required: true,
                isPassword: true
            },
            valid: false,
            touched: false
        },
    },
    formIsValid: false,
    loading: false,
    message: '',
    emailData: null,
    nameData: null
}


orderHandler = ( event ) => {
    event.preventDefault();
    this.setState( { loading: true } );
    const order = {
        email : this.state.loginForm.email.value,
        password: this.state.loginForm.password.value
    }
   
axios({
    method: 'get',
    url: 'http://localhost:4000/user',
    params: order,

}).then( response => {
    this.setState({loading: false})
    this.setState({nameData: response.data.dataName.toString()})
    this.setState({emailData: response.data.data.toString()})
    this.props.dispatch({
        type: 'GET_DATA',
        email: this.state.emailData,
        name: this.state.nameData,
        id: response.data.idData
});
this.props.history.push('/')
})
.catch( error => {
    this.setState( { loading: false } );
    this.setState({message: <p className={classes.WrongData}>Wrong Password or email. Try again!</p>})
 });  
}

checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

   return isValid;
}

inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
        ...this.state.loginForm
    };
    const updatedFormElement = { 
        ...updatedLoginForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedLoginForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedLoginForm) {
        formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({loginForm: updatedLoginForm, formIsValid: formIsValid});
}
  
  render() { 

    const formElementsArray = [];
    for (let key in this.state.loginForm) {
        formElementsArray.push({
            id: key,
            config: this.state.loginForm[key]
        });
    }
     let form = (
         <form onSubmit={this.orderHandler}>
             {formElementsArray.map(formElement => (
                 <Input
                     key={formElement.id}
                     elementType={formElement.config.elementType}
                     elementConfig={formElement.config.elementConfig}
                     value={formElement.config.value}
                     invalid={!formElement.config.valid}
                     shouldValidate={formElement.config.validation}
                     touched={formElement.config.touched}
                     changed={(event) => this.inputChangedHandler(event, formElement.id)} 
                     className={classes.Inputcheckout}/>
             ))}
             <Button btnType="Success" disabled={!this.state.formIsValid}>Login</Button>
         </form>
     );
   
    return ( 

      <div className={classes.LoginMain}>
      <h5>Hello Again!</h5>

<div className={classes.Login}>
{form} 
{this.state.message}  
 <Link to='/Register'>Not Register Yet</Link> 
</div>
   
  </div>

     );
  }
}

      
export default connect()(Login);
