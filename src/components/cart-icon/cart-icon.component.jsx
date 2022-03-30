import { useContext } from 'react';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import {ReactComponent as ShoppingIcon} from '../../assets/images/shopping-bag.svg';

const CartIcon = () =>{
    const {setIsCartOpen,isCartOpen,cartItems}  = useContext(CartContext);
    const handleCartToggle = ()=>{
        setIsCartOpen(!isCartOpen);
    }
    return(<div className='cart-icon-container' onClick={handleCartToggle}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartItems.length}</span>
    </div>)
}
export default CartIcon;