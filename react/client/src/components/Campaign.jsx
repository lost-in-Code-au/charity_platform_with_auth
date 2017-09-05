import React from 'react'
import { string, number } from 'prop-types'

const Campaign = (props) => {
  return (
    <div className='campaign'>
      <img src={`images/${props.image}`} className='campaign-image' />
        <h3 className='campaign-title'>{props.title}</h3>
        <p className='campaign-description'>{props.description}</p>
      <div className='campaign-details'>
      </div>
    </div>
  )
}//TODO:moved .campaign-details till decide what to do with it

Campaign.propTypes = {
  title: string,
  image: string,
  description: string
}


export default Campaign
