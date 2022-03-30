import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { formatCurrency } from '../../utils/formatCurrency';

const CheckoutItem = ({cartItem}) =>{
    const {name,imageUrl,price,quantity} = cartItem;
    const {removeItemToCart,addItemToCart,clearItemFromCart} = useContext(CartContext);

    const clearItemHandler  = () =>{clearItemFromCart(cartItem)}
    const addItemHandler    = () =>{addItemToCart(cartItem)}
    const removeItemHandler = () =>{removeItemToCart(cartItem)}

    return (<div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={name}/>
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
            <span className='icon' onClick={removeItemHandler}><i className="fa-solid fa-minus"></i></span>
            <span className='value'>{quantity}</span>
            <span className='icon' onClick={addItemHandler}><i className="fa-solid fa-plus"></i></span> 
        </div>
        <span className='price'>{price}</span>
        <span className='total-price'>{price * quantity}</span>
        <div className='remove-button' onClick={clearItemHandler}><i className="fa-solid fa-circle-xmark"></i></div>
    </div>);
}
export default CheckoutItem;