import { useContext } from 'react';
import {ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon.styles';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () =>{
    const {setIsCartOpen,isCartOpen,cartItems}  = useContext(CartContext);
    const handleCartToggle = ()=>{
        setIsCartOpen(!isCartOpen);
    }
    return(<CartIconContainer onClick={handleCartToggle}>
        <ShoppingIcon/>
        <ItemCount>{cartItems.length}</ItemCount>
    </CartIconContainer>)
}
export default CartIcon;