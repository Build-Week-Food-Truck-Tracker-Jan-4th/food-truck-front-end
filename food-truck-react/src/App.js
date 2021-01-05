import React, {useState, useEffect} from "react";
import * as yup from "yup";
import {Route, Link, Switch} from 'react-router-dom'
import './App.css';
import DinerForm from "./components/dinerForm";
import axios from "axios";
import schema from './validations/dinerSchema'

const initialFormValues ={
  username: '',
  //text
  password: '',
  //text input for currentlocation not quite sure what to use for this 
  currentLocation:'',
  //trucks own dropdown
  trucksOwned: '',
}

const initialFormErrors = {
  name: '',
  password: '',
  currentLocation: '',
  }

  const initialDiner = [];
  const initialDisabled = true;

function App() {
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
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
      setFormValues({
        ...formValues,
        [name]: value,
      })
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
    currentLocation:formValues.currentLocation.trim(),
    }
    setDiner([...diner,newUser])
    console.log('this is forms in form submit',diner)
    }

    useEffect(() => {
      schema.isValid(formValues).then((valid) => {
        setDisabled(!valid)
      })
    }, [formValues])

  return (
    <DinerForm 
    values ={formValues}
    change ={inputChange}
    submit ={formSubmit}
    disabled ={disabled}
    errors ={formErrors}
    />
    
  );
}

export default App;
