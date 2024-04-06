import React from 'react'

function Loaction({logo, title, label}) {
  return (
    <div className="flex  space-x-3 items-center">
    <div className="text-red-500 text-2xl">
        {logo}
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-lg">{label}</p>
      <p>{title}</p>
    </div>
  </div>
  )
}

export default Loaction