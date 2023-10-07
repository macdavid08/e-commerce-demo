import React from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) =>{
    return(
        <div className='fixed top-0 w-full h-full backdrop-blur-sm  bg-black/80  z-40 ' onClick={props.onSave}/>
    )
}

const Overlay = (props) =>{
    return(
        <div className=' fixed top-32 left-12 md:w-2/4  md:left-80 py-8 px-10 bg-white z-50  rounded-md  '>
            <div>{props.children}</div>
        </div>
    )
}

export const ErrorModal = (props,{onSave}) => {
    const modal = document.getElementById('modal')
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onSave={onSave}/>, modal)}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, modal)}
    </>
  )
}
