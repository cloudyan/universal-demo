import React from 'react';
import Home from './Home';

async function controller() {
  /**
   * fetch data
   */

  await new Promise(resolve => {
    setTimeout(() => {
      resolve(2)
    }, 1000)
  })
  
  return {
    title: 'universal',
    chunks: ['home'],
    component: <Home />,
  }
}

export default controller