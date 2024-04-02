import React from 'react'

function WIdeItems({name, icons}) {
  return (
    <div className="hover:ml-2 transition-all ease-linear duration-300">
            <a className="flex space-x-1" href="#">
              <span className="mt-1">
                {icons}
              </span>
              <span>{name}</span>
            </a>
          </div>
  )
}

export default WIdeItems