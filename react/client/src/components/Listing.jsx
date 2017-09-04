import React from 'react'
import { Link, Router } from 'react-router-dom'
import Campaign from './Campaign.jsx'

class Listing extends React.Component {

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.state = {
      searchQuery: '',
      Campaigns: []
    }
  }

  componentDidMount(){
    var url = 'http://localhost:3000/campaigns'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { Campaigns: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        this.props.history.goBack()
       }
    }
    request.send(null)
  }

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  }

  render(){
    return(
      <div className="listing">
        <nav>
          <Link to='/' className='title'>GivingWeb</Link>
          <input className='search-box' type='text' placeholder='Search...' value={this.state.searchQuery} onChange={this.doSearch} />
        </nav>

        <div className='campaigns-container'>
          {
            this.state.Campaigns.filter((campaign) => `${campaign.title} ${campaign.description}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((campaign) => (
              <Campaign { ...campaign } key={campaign.programmeID}/>
            ))

          }
        </div>

      </div>
    )
  }

}

export default Listing
