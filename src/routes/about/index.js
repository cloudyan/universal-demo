import React from 'react';
import About from './About';

async function controller() {
  /**
   * fetch data
   */

  await new Promise(resolve => {
    setTimeout(() => {
      resolve(2)
    }, 500)
  })
  
  return {
    title: 'about page',
    chunks: ['about'],
    component: <About />,
  }
}

export default controller