import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';

const Bform = styled.form `
border: 2px solid tan;
border-radius: 3px;
`


export default function DinerForm (props){
    const {values, change, submit, disabled, errors} = props;

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <Bform className= 'Form container' onSubmit={onSubmit}>
            <h1> Please Sign in</h1>
            <div className="errors">
             <div>{errors.username}</div>
             <div>{errors.password}</div>
             <div>{errors.currentLocation}</div>
             <div>{errors.trucksOwned}</div>
            </div>
           <div className = 'form-groups'>
               <label>
               Username
               <input
               name='username'
               type= 'text'
               placeholder= 'Username Here'
               maxLength = '20'
               value= {values.username}
               onChange= {onChange}
               />
               </label>

               <label>
               Password
               <input
               name='password'
               type= 'password'
               placeholder= 'Password here'
               value ={values.password}
               onChange= {onChange}
               />
               </label>

               <label>
               Keep me signed in
               <input
               name='terms'
               type= 'checkbox'
               checked= {values.terms}
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