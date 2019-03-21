import React from 'react';
import styles from './Home.css';
import image from './test.jpg';
import { hot } from 'react-hot-loader/root';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: 4344,
    }
  }

  componentWillMount() {
    if (__isClient__) {

    }
  }

  componentDidMount() {
    setInterval(() => {
      console.log(11111);
    }, 2000)
  }

  render() {
    const { test } = this.state;

    return <div className={styles.root}>
      <div>acfefdfd</div>
      <div>acfefdfd</div>
      <div onClick={() => {console.log('hahaha')}}>b</div>
      <div className={styles.image}></div>
      <img src={image}/>
      <div>{test}</div>
    </div>
  }
}

let HotApp = Home

if (__isClient__) {
  HotApp = hot(Home)
}

export default HotApp
