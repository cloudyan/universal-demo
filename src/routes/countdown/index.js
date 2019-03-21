import React from 'react';
import CountDown from './CountDown';

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
    title: 'countdown page',
    chunks: ['countdown'],
    component: <CountDown />,
  }
}

export default controller
