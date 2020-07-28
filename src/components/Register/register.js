import React, { Component } from 'react';
import classes from './register.module.css'
import axios from 'axios'
import Input from '../Checkout/input'
import Button from '../Checkout/buttoncheckout'
import {Link} from 'react-router-dom'

class Register extends Component {
 
  state = {
    
     registerForm: {
        fname: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your First Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        lname: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Last Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8,
                maxLength: 8,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        Birthday: {
            elementType: 'input',
            elementConfig: {
                type: 'date',
                placeholder: 'Birthday'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
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
        passwordAgain: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Your Password Again'
            },
            value: '',
            validation: {
                required: true,
                isPasswordAgain: true
            },
            valid: false,
            touched: false
        },
    },
    formIsValid: false,
    loading: false,
    message: ''
}

orderHandler = ( event ) => {
     event.preventDefault();
     this.setState( { loading: true } );
     const formData = {};
     for (let formElementIdentifier in this.state.registerForm) {
         formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
     }

  
      const order = {
    orderData : formData
     }
     if(this.state.registerForm.passwordAgain.value !== this.state.registerForm.password.value){
        
        this.setState({message: <p className={classes.AlreadyRegister}>Your password should be the same!</p>})
     }else{
        axios({
            method: 'post',
            url: 'http://localhost:4000/user',
            params: order,
            
          }).then( response => {
              console.log(response)
              if(response.data !== 'Sucess'){
                this.setState({message: <p className={classes.AlreadyRegister}>You are already register!</p>})
              }else{
                this.setState({loading: false})
                this.props.history.push('/')
              }
          
        } )
        .catch( error => {
            console.log(error)
            this.setState( { loading: false } );
        } );
     }
   
   

  
}

checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isPassword) {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters that are letters, numbers or the underscore
    
        const rulePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
        isValid = rulePassword.test(value) && isValid
        
        }

    return isValid;
}

inputChangedHandler = (event, inputIdentifier) => {
    const updatedRegisterForm = {
        ...this.state.registerForm
    };
    const updatedFormElement = { 
        ...updatedRegisterForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedRegisterForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedRegisterForm) {
        formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({registerForm: updatedRegisterForm, formIsValid: formIsValid});
}
  
  render() { 


    const formElementsArray = [];
    for (let key in this.state.registerForm) {
        formElementsArray.push({
            id: key,
            config: this.state.registerForm[key]
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
             <Button btnType="Success" disabled={!this.state.formIsValid}>Register</Button>
         </form>
     );
   
    return ( 

      <div className={classes.RegisterMain}>
      <h5>Create an account. Enjoy faster shopping and more!</h5>

<div className={classes.Register}>
{form} 
{this.state.message}
<Link to='/Login'>Alredy Register</Link> 
</div>
   
  </div>

     );
  }
}

export default Register; 