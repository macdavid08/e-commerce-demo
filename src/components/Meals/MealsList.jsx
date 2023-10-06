import React from 'react'

export const MealsList = ({value}) => {
  return (
    <>
    <div className='flex items-center justify-between bg-white rounded-md shadow-md overflow-hidden'>
        <div>
            <img src={value.img} alt="Meals" className='w-32 h-32 object-cover object-center lg:h-48 lg:w-48 xl:h-52 xl:w-52 flex-shrink-0 ' />
        </div>
    </div>
    </>
  )
}
