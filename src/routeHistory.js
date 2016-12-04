/* global process */

import {browserHistory, hashHistory} from 'react-router';

export default (process && process.env && process.env.NODE_ENV === 'production' ? browserHistory : hashHistory);