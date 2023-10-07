import React from 'react'
import { CartContext } from './cart-context'

export const CartProvider = (props) => {

    const addItemHandler = ()=>{}

    const removeItemHandler = ()=>{}

    const cartContext = ({
        items: [],
        totalAmount: 0,
        addItem: addItemHandler ,
        removeItem: removeItemHandler
    })
  return (
    <>
    <CartContext.Provider>{props.children}</CartContext.Provider>
    </>
  )
}
