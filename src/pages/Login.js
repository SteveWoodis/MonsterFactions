import React from 'react';
import {Paper, TextField, FlatButton} from 'material-ui';
import {Link} from 'react-router';

const Login = () => {
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
        <FlatButton label="Login"/>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </Paper>
    </div>
  );
};

export default Login;
