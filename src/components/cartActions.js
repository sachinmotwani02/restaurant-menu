
import { ADD_TO_CART, ADD_ITEM, SUBTRACT_ITEM, SUBTRACT_QUANTITY } from "./action-types/cart-actions";

//add cart action
export const addToCart= (items)=>{
    return{
        type: ADD_TO_CART,
        items
    }
}

//add item action
export const addItem= (id)=>{
    return{
        type: ADD_ITEM,
        id
    }
}

//remove item action
export const subtractItem= (id)=>{
    return{
        type: SUBTRACT_ITEM,
        id
    }
}

export const subtractQuantity= (id)=>{
    return{
        type: SUBTRACT_QUANTITY,
        id
    }
}