import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartContext} from '../../contexts/cart.context';

const CartDropDown = () =>{
    const {cartItems,setIsCartOpen,isCartOpen} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOut = ()=>{
        navigate('/checkout');
        setIsCartOpen(false);
    }
    return(<div className='cart-dropdown-container'>
        {cartItems.length ? (<div>
            <div className='cart-items'>
                {cartItems.map(item =>{
                    return (<CartItem key={item.id} cartItem={item}/>)
                })}
            </div>
            <Button type="button" onClick={goToCheckOut}>GO TO CHECKOUT</Button>
        </div>) : <div className='cart-no-data'>
            <i className="fa-solid fa-box fa-2x"></i>
            <p>Cart is empty</p>
        </div>}
    </div>)
} 
export default CartDropDown;