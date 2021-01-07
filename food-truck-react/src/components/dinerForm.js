import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import axios from "axios";
import schema from '../validations/dinerSchema'
import styled from "styled-components"
import * as yup from "yup";

const initialFormValues ={
  username: '',
  //text
  password: '',
  //text input for currentlocation not quite sure what to use for this 
  currentLocation:'',
  //trucks own dropdown
  trucksOwned: '',
  //Stay signed in box 
  terms: false,
}

const initialFormErrors = {
  name: '',
  password: '',
  currentLocation: '',
  }

  const initialDiner = [];
  const initialDisabled = true;

const Bform = styled.form `
border: 2px solid tan;
border-radius: 3px;
`


export default function DinerForm (props){


    const [diner, setDiner] = useState(initialDiner);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors]=useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const inputChange = (name, value) => {

      yup
      .reach(schema,name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors,[name]:''})
      })
      .catch((err) => {
        setFormErrors({...formErrors,[name]: err.errors[0],
        });
      });
      setFormValues({...formValues, [name]: value,})
  }

  const formSubmit = () => {

    axios
    .post('https://reqres.in/api/users', formValues)
    .then((res) => {
      setFormValues(initialFormValues)
      console.log('this resData in my .post', res.data)
    })
    .catch((err) => {
        console.log(err);
      });
    
    const newUser = {
    username :formValues.username.trim(),
    password:formValues.password.trim(),
    signIn:["terms"].filter(
      (signIn) => formValues[signIn]
      )
    }
    setDiner([...diner,newUser])
    console.log('this is forms in form submit',diner)
    }

    useEffect(() => {
      schema.isValid(formValues).then((valid) => {
        setDisabled(!valid)
      })
    }, [formValues])

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        inputChange(name, valueToUse);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        formSubmit();
    };

    return (
        <Bform className= 'Form container' onSubmit={onSubmit}>
            <h1> Please Sign in</h1>
            <div className="errors">
             <div>{formErrors.username}</div>
             <div>{formErrors.password}</div>
             <div>{formErrors.currentLocation}</div>
             <div>{formErrors.trucksOwned}</div>
            </div>
           <div className = 'form-groups'>
               <label>
               Username
               <input
               name='username'
               type= 'text'
               placeholder= 'Username Here'
               maxLength = '20'
               value= {formValues.username}
               onChange= {onChange}
               />
               </label>

               <label>
               Password
               <input
               name='password'
               type= 'password'
               placeholder= 'Password here'
               value ={formValues.password}
               onChange= {onChange}
               />
               </label>

               <label>
               Keep me signed in
               <input
               name='terms'
               type= 'checkbox'
               checked= {formValues.terms}
               onChange= {onChange}
               />
               </label>
               {/* <label>
               Location
               <input
               name='currentLocation'
               type= 'text'
               placeholder= 'Your Address Here'
               value ={values.currentLocation}
               onChange= {onChange}
               />
               </label> */}

               {/* <label>
               Trucks Owned
               <select onChange={onChange} value={values.trucksOwned} name="trucksOwned">
                <option value="">- Select an option -</option>
                <option value="Taco Truck">Taco Food Truck</option>
                <option value="Pizza Truck">Pizza Food Truck</option>
                <option value="Mediterran Truck">Mediterran Food Truck</option>
                <option value="Other">Other</option>
               </select> 
               </label> */}

                <div className ='dinerLogIn'>
               <button className ='LogInButton'disabled={disabled}>Log In</button>
               </div>
           </div>
       </Bform>
    )
}