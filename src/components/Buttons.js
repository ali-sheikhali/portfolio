import React from 'react'

function Buttons({name, style}) {
  return (
    <div className=''>
        <button style={style}
        className='px-4 py-2 rounded-2xl hover:shadow-xl  ease-in duration-300 transition-all'
        >{name}</button>
    </div>
  )
}

export default Buttons