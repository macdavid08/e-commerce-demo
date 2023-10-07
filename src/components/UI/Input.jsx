import React from 'react'

export const Input = (props) => {
  return (
    <div className='flex items-center justify-between space-x-1'>
        <label htmlFor={props.input.id} className='text-sm font-Poppins text-slate-600 tracking-tight md:text-base  ' >{props.label}</label>
        <input id={props.input.id} {...props.input} className='w-1/3 outline-none border-2 border-green-600  py-1 rounded-md '/>
    </div>
  )
}
