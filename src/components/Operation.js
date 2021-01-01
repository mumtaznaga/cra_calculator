import React from 'react'

const Operation = (props) => {
  return (
    <div>
      <div className="text-white h-10 pt-10 p-5 text-3xl text-right bg-blue-800">{props.operation}</div>
    </div>
  )
}

export default Operation;
