import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
// import Listing from './components/Listing'//home should have the listing, not app.js
import { HashRouter, Route, IndexRoute } from 'react-router-dom'


class App extends React.Component{

  render(){
    return (
      <HashRouter>
        <div className='container'>
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    )
  }
}
{/* <Route path='/member-campaigns' component={Listing} /> */}


ReactDOM.render(<App />, document.getElementById('app'))
