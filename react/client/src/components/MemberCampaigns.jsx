import React from 'react'
import { string, number } from 'prop-types'

const MemberCampaigns = (props) => (
  <div className='member-campaigns'>
    <img src={`images/${props.image}`} className='campaigns-image' />
    <div className='campaigns-details'>
      <h3 className='campaigns-title'>{props.title}</h3>
      <p className='campaigns-description'>{props.description}</p>
    </div>
  </div>
)

MemberCampaigns.propTypes = {
  title: string.isRequired,
  image: string.isRequired,
  description: string.isRequired
}


export default MemberCampaigns
