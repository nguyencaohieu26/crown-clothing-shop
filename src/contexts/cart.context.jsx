import { createContext,useState,useEffect } from "react";

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
    isCartOpen:false,
    setIsCartOpen:() =>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    total:0
});

export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems]   = useState([]);
    const [cartTotal,setCartTotal]   = useState(0);

    const addItemToCart = (product)=>{
        setCartItems(addCartItem(cartItems,product));
    }
    const removeItemToCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
    }

    useEffect(()=>{
        const  newCartTotalPrice = cartItems.reduce((total,cartItem)=>{
            return total += (cartItem.quantity * cartItem.price);
        },0)
        setCartTotal(newCartTotalPrice)
    },[cartItems]);

    const clearItemFromCart = (cartItemClear)=>{
        setCartItems(clearCartItem(cartItems,cartItemClear))
    }
    const value = {isCartOpen,cartItems,cartTotal,clearItemFromCart,setIsCartOpen,addItemToCart,removeItemToCart}
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}