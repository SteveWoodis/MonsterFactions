import React from 'react';
import {Paper, TextField, FlatButton} from 'material-ui';
import {Link} from 'react-router';

const Contact = () => {
  const style = {
    padding: 20,
    margin: '0 0 40px 0',
    width: 600
  };
  return (
    <div className="content flex-row space-around" style={{width: '100%'}}>
      <Paper style={style} zDepth={1}>
        <TextField
          fullWidth
          hintText="Hint Text"
          floatingLabelText="Name"
        /><br />
        <TextField
          fullWidth
          hintText="Hint Text"
          floatingLabelText="Email"
        /><br />
        <TextField
          fullWidth
          hintText="Leave a comment."
          multiLine={true}
          rows={3}
          rowsMax={10}
          floatingLabelText="Comments"
        /><br />
        <FlatButton label="Send"/>
      </Paper>
    </div>
  );
};

export default Contact;
