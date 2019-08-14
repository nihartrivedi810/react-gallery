import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from 'components/container/Gallery';

import 'styles/app.scss';

const App = () => (
  <Gallery />
);

ReactDOM.render(<App />, document.getElementById('app'));
