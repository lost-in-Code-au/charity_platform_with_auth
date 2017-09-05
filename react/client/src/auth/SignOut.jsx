import React from 'react'
import { Link } from 'react-router-dom'

class SignOut extends React.Component{

  constructor(){
    super()
    this.signOut = this.signOut.bind(this)
  }

  signOut(event){
    const request = new XMLHttpRequest()
    request.open("GET", this.props.url + "signout")
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 200) {
        this.props.onSignOut(null)
      }
    }

    request.send()

    // sign out request here
  }

  render() {
    return (
       <div>
        <button onClick={this.signOut}>Sign Out</button>
        <Link className='shows-link' to='/shows'>View Shows</Link>
      </div>
    )
  }
}

export default SignOut
