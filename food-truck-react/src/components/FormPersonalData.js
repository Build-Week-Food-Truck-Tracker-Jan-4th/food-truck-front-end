import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();   
    }

        
    back = e => {
        e.preventDefault();
        this.props.prevStep();   
    }

    render() {
        const { values, handleChange } = this.props;
    
        return (
            <MuiThemeProvider>
                <React.Fragment>
                  
                <AppBar title="Operator Sign Up" />
                <TextField
                    hintText="Enter Your Username"
                    floatingLabelText="Username"
                    onChange={handleChange('Username')}
                    defaultValue={values.Username}
                />
                <br/>
                <TextField
                    hintText="Enter Your Password"
                    floatingLabelText="Password"
                    onChange={handleChange('Password')}
                    defaultValue={values.Password}
                />
                <br/>
                <TextField
                    hintText="Enter The Trucks You Own"
                    floatingLabelText="Trucks Owned?"
                    onChange={handleChange('trucks')}
                    defaultValue={values.trucks}
                />
                <br/>
                <RaisedButton 
                    lable="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
                <br/>
                    <RaisedButton 
                        lable="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>

        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}
export default FormPersonalDetails;
