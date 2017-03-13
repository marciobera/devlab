import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Marcio',
  lastName: 'Bera'
};


const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, ' + formatName(user)
);

ReactDOM.render(
  element,
  document.getElementById('root')
);