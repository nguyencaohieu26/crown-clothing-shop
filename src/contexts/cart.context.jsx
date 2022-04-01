import { createContext,useReducer } from "react";
import {CART_ACTION_TYPES} from './action-type';
import {createAction} from '../utils/reducer/reducer.utils'

//helper function
const addCartItem = (cartItems,productToAdd) =>{
    const cartItemExist = cartItems.find(item => item.id == productToAdd.id);
    if(cartItemExist){
        return cartItems.map(cartItem => cartItem.id == productToAdd.id ? 
            {...cartItem,quantity:cartItem.quantity + 1} : cartItem)
    }
    return [...cartItems,{...productToAdd,quantity:1}];
}
const removeCartItem = (cartItems,cartItemToRemove) =>{
    const cartItemExist = cartItems.find(item => item.id == cartItemToRemove.id);
    if(!cartItemExist) return;
    if(cartItemExist.quantity == 1){
        return cartItems.filter(item => item.id != cartItemToRemove.id);
    }
    return cartItems.map(cartItem => cartItem.id == cartItemToRemove.id ? 
        {...cartItem,quantity:cartItem.quantity - 1} : cartItem)
}
const clearCartItem = (cartItems,cartItemToRemove)=>{
    return cartItems.filter(item => item.id != cartItemToRemove.id);
}

export const CartContext = createContext({
    total:0,
    cartItems:[],
    isCartOpen:false,
    setIsCartOpen:() =>{},
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
});

const INITIAL_STATE = {
    total:0,
    cartItems:[],
    isCartOpen:false,
}

//handle update the state
const cartReducer = (state,action)=>{
    const {type,payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.TOGGLE_OPEN_CLOSE_CART:
            return{
                ...state,
                isCartOpen:!state.isCartOpen
            }
        default:
         throw new Error(`Unhandled type of ${type} in CartReducer`)
    }
}

export const CartProvider = ({children}) =>{
    const [{cartItems,total,isCartOpen}, dispatch] = useReducer(cartReducer,INITIAL_STATE);

    //some helper functions
    const addItemToCart = (product)=>{
       const newCartItems =  addCartItem(cartItems,product);
       updateCartItemsReducer(newCartItems);
    }
    const removeItemToCart = (cartItemToRemove)=>{
        const newCartItems = removeCartItem(cartItems,cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }
    const clearItemFromCart = (cartItemClear)=>{
        const newCartItems = clearCartItem(cartItems,cartItemClear);
        updateCartItemsReducer(newCartItems);
    }
    //dispatch function
    const updateCartItemsReducer = (newCartItems) =>{
        const  newCartTotalPrice = newCartItems.reduce((total,cartItem)=>{
            return total += (cartItem.quantity * cartItem.price);
        },0);
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartItems:newCartItems,total:newCartTotalPrice}))
    }
    
    const setIsCartOpen =()=>{
        dispatch(createAction(CART_ACTION_TYPES.TOGGLE_OPEN_CLOSE_CART,null));
    }

    const value = {isCartOpen,cartItems,total,clearItemFromCart,setIsCartOpen,addItemToCart,removeItemToCart}

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}