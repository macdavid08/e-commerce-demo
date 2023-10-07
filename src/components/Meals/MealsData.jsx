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
            desc: " Adelectable spicy roasted goat chopped into bite-sized pieces, with bell peppers.",
            price: 7.2

        },
        {
            id: 'm2',
            img: shawarma,
            title: "Shawarma",
            desc: "A thinly sliced cuts of meat, like chicken, beef, goat, lamb,  rolled into a large piece of flatbread. ",
            price: 5.2

        },
        {
            id: 'm1',
            img: burger,
            title: "Meat Burger",
            desc: " A sandwich consisting of a patty of ground meat, typically beef—placed inside a sliced bun.",
            price: 5.5

        },
        {
            id: 'm4',
            img: tableFood,
            title: "Table of Food",
            desc: " A combination of different dishes from all cultures to satisfy your tasty cravings",
            price: 25

        },
        {
            id: 'm5',
            img: chickenNchips,
            title: "Chicken & Chips",
            desc: "A combination of fried chicken and chips. ",
            price: 10.25

        },
        {
            id: 'm6',
            img: mixed,
            title: "Food Varities",
            desc: " A combination of different dishes from all cultures to satisfy your tasty cravings",
            price: 20

        }
    ]

    const MealsItem = DataDetails.map((data)=>{
        return(<MealsList key={data.id} value={data}/>)
    })
  return (
    <div className=' m-0 -mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-4 md:py-4 md:mt-10 lg:py-4 xl:mt-14 '>{MealsItem}</div>
  )
}
