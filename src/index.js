import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'styles/app.module';

class App extends React.Component {
  render() {
    return (
      <div className={styles.header}>Hello World!</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
