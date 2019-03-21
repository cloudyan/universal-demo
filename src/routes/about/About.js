import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: 'about page',
    }
  }

  render() {
    const { test } = this.state;

    return <div>
    dfdfdf
      <div>{test}</div>
    </div>
  }
}

export default About
