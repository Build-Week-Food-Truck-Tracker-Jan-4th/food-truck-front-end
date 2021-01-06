import React, { Component } from 'react';
import FormPersonalDetails from './FormPersonalData';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName:'',
        email:'',
    }

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState ({
            step: step + 1
        });
    }

       // Proceed to the prev step
       prevStep = () => {
        const { step } = this.state;
        this.setState ({
            step: step - 1
        });
    }

    //  Handel fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, trucks } = this.state;
        const values = {  firstName, lastName, email, trucks  }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return (
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
            case 4:
                return <h1>Sucess</h1>
        }
    }
}

export default UserForm
