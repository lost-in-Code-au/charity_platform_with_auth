import React from 'react'
import { Link } from 'react-router'
import LoginBox from '../auth/LoginBox'
import Popuplogin from '../components/Popuplogin'
import Popup from 'react-popup'//npm input
import Listing from './Listing'

import ReactDOM from 'react-dom'

// console.log(Popup.alert)

const Home = function () {
  ReactDOM.render(<Popup />, document.querySelector('#popup-thingy'))
  return (
    <div className="home">
      <div className="nav-header">
        <h1 className='title'>CodeForChange</h1>
        {/* <LoginBox url="http://localhost:3000/" /> */}
        {/* <Popuplogin url="http://localhost:3000/" /> */}
      </div>

      <div className="campaigns">
        <Listing />
      </div>

      <div>
        <button onClick={() => { console.log("I'm working!!");   Popup.alert(
            <div>
              <h1 className='title'>CodeForChange</h1>
              <LoginBox url="http://localhost:3000/" />
            </div>
          ) }} >click me</button>
      </div>
    </div>
  )
}

export default Home
