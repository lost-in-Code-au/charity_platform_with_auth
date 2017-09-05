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
        // console.log("request: ", request.responseText)//TODO: remove after images are done
        var data = JSON.parse(request.responseText)

        var newCampaigns = [...this.state.Campaigns]

        for (let key in data) {
          newCampaigns.push(data[key]);
        }

        this.setState( { Campaigns: newCampaigns } )
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
    // console.log(this.state.Campaigns)//TODO: remove after images are done

    const filtered = this.state.Campaigns.filter((campaign) => `${campaign.title} ${campaign.description}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)

    const campaigns = filtered.map((campaign, index) => {
      return <Campaign { ...campaign } key={ index }/>
    })
    // console.log('campaigns:', campaigns)//TODO: remove after images are done
    return(
      <div className="listing">
        <nav>
          <Link to='/' className='title'>GivingWeb</Link>
          <input className='search-box' type='text' placeholder='Search...' value={this.state.searchQuery} onChange={this.doSearch} />
        </nav>


        <div className='campaigns-container'>
          {
            campaigns
          }
        </div>

      </div>
    )
  }

}

export default Listing
