import React from 'react'

const Card = ({id,title,desc}) => {
  return (
    <div className='card'>
    <div className="img"></div>
    <h2>{title}</h2>
    <p>{desc}</p>
  </div>
  )
}

export default Card