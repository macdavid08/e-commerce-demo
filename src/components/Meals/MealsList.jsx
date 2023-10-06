import React from 'react'

export const MealsList = ({value}) => {
  return (
    <>
    <div className='grid grid-cols-2 items-center justify-between bg-white rounded-md shadow-md overflow-hidden'>
        <div>
            <img src={value.img} alt="Meals" className='w-48 h-40 object-cover object-center lg:h-40 lg:w-52 xl:h-40 xl:w-72 flex-shrink-0 ' />
        </div>
        <div className='px-3 w-full    '>
          <h2 className=' tracking-tight text-sm md:text-base font-Poppins font-semibold uppercase text-green-700 '>{value.title}</h2>
          <p className='  text-xs font-Poppins text-slate-600 md:tracking-tight leading-4'>{value.desc}</p>
          <span className='text-sm text-slate-700 font-Poppins'>{value.price}</span>
          <div>
            <h2>input</h2>
          </div>
        </div>
    </div>
    </>
  )
}
