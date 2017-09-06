import React from 'react'

class SignOut extends React.Component{

  constructor(){
    super()
    this.signOut = this.signOut.bind(this)
  }

  signOut(event){
    const request = new XMLHttpRequest()
    request.open("DELETE", this.props.url + "logout")
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
      </div>
    )
  }
}

export default SignOut
