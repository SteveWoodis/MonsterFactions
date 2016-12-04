import React from 'react';
import {Paper, TextField, FlatButton} from 'material-ui';
import {Link} from 'react-router';

const Register = () => {
  const style = {
    padding: 20,
    margin: '0 0 40px 0',
    width: 600
  };
  return (
    <div className="content flex-row space-around">
      <Paper style={style} zDepth={1}>
        <div className="flex-row" style={{width: '100%'}}>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Email"
          /><br />
          <TextField
            style={{width: '50%'}}
            hintText="Hint Text"
            floatingLabelText="Faction"
          /><br />
        </div>
        <div className="flex-row" style={{width: '100%'}}>
          <TextField
            hintText="Hint Text"
            floatingLabelText="First Name"
          /><br />
          <TextField
            style={{width: '50%'}}
            hintText="Hint Text"
            floatingLabelText="Last Name"
          /><br />
        </div>
        <TextField
          fullWidth
          hintText="Hint Text"
          floatingLabelText="Street Address"
        /><br />
        <div className="flex-row" style={{width: '100%'}}>
          <TextField
            hintText="Hint Text"
            floatingLabelText="City"
          /><br />
          <TextField
            style={{width: '20%'}}
            hintText="Hint Text"
            floatingLabelText="State"
          /><br />
          <TextField
            style={{width: '30%'}}
            hintText="Hint Text"
            floatingLabelText="Zip"
          /><br />
        </div>
        <div className="flex-row" style={{width: '100%'}}>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Username"
          /><br />
          <TextField
            style={{width: '50%'}}
            type="password"
            hintText="Hint Text"
            floatingLabelText="Password"
            errorText="This field is required."
          /><br />
        </div>
        <FlatButton label="Register"/>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </Paper>
    </div>
  );
};

export default Register;
