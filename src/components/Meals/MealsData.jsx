import React from 'react'
import asun from "../../assests/asun.jpg"
import burger from "../../assests/burger.jpg"
import chickenNchips from "../../assests/chicken & chips.jpg"
import shawarma from "../../assests/shawarma.jpg"
import mixed from "../../assests/mixed-food.jpg"
import tableFood from "../../assests/top-view-table-full-delicious-food-composition.jpg"
import { MealsList } from './MealsList'

export const MealsData = () => {
    const DataDetails = [
        {
            id: 'm1',
            img: asun,
            title: "Asun",
            price: "$5"

        },
        {
            id: 'm2',
            img: shawarma,
            title: "Shawarma",
            price: "$5"

        },
        {
            id: 'm1',
            img: burger,
            title: "Meat Burger",
            price: "$5"

        },
        {
            id: 'm4',
            img: tableFood,
            title: "Table of Food",
            price: "$25"

        },
        {
            id: 'm5',
            img: chickenNchips,
            title: "Chicken & Chips",
            price: "$7"

        },
        {
            id: 'm6',
            img: mixed,
            title: "Food Varities",
            price: "$20"

        }
    ]

    const MealsItem = DataDetails.map((data)=>{
        return(<MealsList key={data.id} value={data}/>)
    })
  return (
    <div className=' m-0 -mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-4 md:py-4 md:mt-10 lg:py-4 xl:mt-14 '>{MealsItem}</div>
  )
}
