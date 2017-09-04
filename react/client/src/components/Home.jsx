import React from 'react'
import { Link } from 'react-router'
import LoginBox from '../auth/LoginBox'
import Listing from './Listing'

const Home = () => (
  <div className="home">
    <div className="nav-header">
      <h1 className='title'>CodeForChange</h1>
      <LoginBox url="http://localhost:3000/" />
    </div>

    <div className="campaigns">
      <Listing />
    </div>
  </div>
)

export default Home
