import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartContext} from '../../contexts/cart.context';
import {CartDropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles';

const CartDropDown = () =>{
    const {cartItems,setIsCartOpen,isCartOpen} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOut = ()=>{
        navigate('/checkout');
        setIsCartOpen(false);
    }
    return(<CartDropDownContainer>
        {cartItems.length ? (<div>
            <CartItems>
                {cartItems.map(item =>{
                    return (<CartItem key={item.id} cartItem={item}/>)
                })}
            </CartItems>
            <Button type="button" onClick={goToCheckOut}>GO TO CHECKOUT</Button>
        </div>) : <EmptyMessage>
            <i className="fa-solid fa-box fa-2x"></i>
            <p>Cart is empty</p>
        </EmptyMessage>}
    </CartDropDownContainer>)
} 
export default CartDropDown;