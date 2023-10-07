import React from 'react'

export const Input = (props) => {
  return (
    <div className='flex items-center  space-x-2 md:space-x-4'>
        <label htmlFor={props.input.id} className='text-sm font-Poppins text-slate-600 tracking-tight md:text-base  ' >{props.label}</label>
        <input id={props.input.id} {...props.input} className='w-12 px-1 outline-none border-2 border-slate-300  rounded-md '/>
    </div>
  )
}
