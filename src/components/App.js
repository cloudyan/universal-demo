import React from 'react';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return <div>
    <div>test</div>
    {this.props.children}
    </div>;
  }
}

let HotApp = App

if (__isClient__) {
  HotApp = hot(App)
}

export default HotApp