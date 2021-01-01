import React from 'react'


const Operator = (props) => {
  return (
    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold " onClick={props.onClick}>
      <div className="cursor-pointer rounded-full h-20 w-20 flex items-center bg-blue-600 justify-center shadow-lg border-blue-500 border-2 hover:border-2 hover:border-blue-400 hover:bg-blue-500 hover:border-blue-600 active:bg-blue-800">
        {props.sign}
      </div>
    </div>
  )
}

export default Operator;