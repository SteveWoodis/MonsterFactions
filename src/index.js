import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/styles.css';
import './styles/prettify.css';
import './styles/flat-ui.css';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
