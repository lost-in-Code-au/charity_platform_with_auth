import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignOut from './SignOut'
import Popup from 'react-popup'

class LoginBox extends React.Component {

  constructor(props) {
    super(props)
    this.setUser = this.setUser.bind(this)
    this.state = {
      currentUser: null
    }
  }

  setUser(user){
    this.setState({currentUser:user})
  }

  fetchUser(){
    const request = new XMLHttpRequest()
    request.open("GET", this.props.url + "amiloggedin")
    request.setRequestHeader("Content-Type", "application/json")

    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        const recieveredUser = JSON.parse(request.responseText)
        this.setUser(recieveredUser)
      } else  if (request.status === 401){
        this.setUser(null)
      }

    }

    request.send()
  }//TODO: refactor to promises

  componentDidMount(){
    this.fetchUser()
  }

  render () {
      var mainDiv = <div className='login-container'>
        <h4> Please Sign In/Up </h4>
        <SignIn url={this.props.url} onSignIn={this.setUser}></SignIn>
        <SignUp url={this.props.url} onSignUp={this.setUser}></SignUp>
      </div>
      if(this.state.currentUser){
        mainDiv = <div className='login-container'>
          <h4> Welcome {this.state.currentUser.username}</h4>
          <SignOut url={this.props.url} onSignOut={this.setUser}></SignOut>
        </div>
      }
      return (
        <div>
          { mainDiv }
        </div>
      )
  }
}

export default LoginBox
