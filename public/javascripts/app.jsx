import React from 'react';
import ReactDOM from 'react-dom';

import './../stylesheets/main.scss';
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        hello from React!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
