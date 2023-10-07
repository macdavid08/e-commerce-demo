import React from 'react'

export const Button = (props) => {
  return (
    <button className="px-6 py-2 text-slate-700 border-2 border-green-600 outline-none rounded-full hover:bg-green-600 hover:text-white active:bg-green-800 hover:border-none  uppercase font-Poppins font-semibold  text-right cursor-pointer" >{props.children}</button>
  )
}
