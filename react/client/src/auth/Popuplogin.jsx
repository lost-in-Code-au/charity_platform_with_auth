import React from 'react'
import Popup from 'react-popup'
import LoginBox from '../auth/LoginBox'

import ReactDOM from 'react-dom'//need?

const Popuplogin = function () {
  ReactDOM.render(<Popuplogin />, document.querySelector('#popup-thingy'))
  return(
    <div>
      <button onClick={() => { console.log("I'm working!!");   Popup.alert(
        <div>
          <h1 className='title'>CodeForChange</h1>
          <LoginBox url="http://localhost:3000/" />
        </div>
      ) }} >click me</button>
  </div>
  )
}

export default Popuplogin
