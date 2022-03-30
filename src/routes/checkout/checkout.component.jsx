import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { formatCurrency } from '../../utils/formatCurrency';

const Checkout = () =>{
    const {cartItems,cartTotal} = useContext(CartContext);
    
    return (<div className='checkout-container'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Unit Price</span>
            </div>
            <div className="header-block">
                <span>Total</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.length ? (<div className='checkout-main'>  {cartItems.map(item =>{
            return (<CheckoutItem key={item.id} cartItem={item}/>)
        })} 
        <p className='total'>Total Price: <span>{cartTotal}</span></p></div>) : (<div><p>No products found</p></div>)}
      
    </div>)
}
export default Checkout;