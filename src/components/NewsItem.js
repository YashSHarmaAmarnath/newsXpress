import React from 'react'

export const NewsItem = (props) => {
  return (
    <div className='NewsItem'><img src={props.imageUrl} alt="" />
        <p>{props.title}</p></div>
  )
}
