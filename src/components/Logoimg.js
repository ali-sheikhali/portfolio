import React from 'react'
import img from "../media/my-photo.jpg"
function Logoimg({style}) {
  return (
    <figure>
        <img style={style}
        className='rounded-full border-[3px] border-yellow-300'
         src={img} alt="" />
    </figure>
  )
}

export default Logoimg