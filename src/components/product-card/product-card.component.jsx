import React,{useContext} from 'react'
import './product-card.styles.scss';
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {
  const {addItemToCart} = useContext(CartContext);

  const {name,price,imageUrl} = product; 
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`product-${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <Button onClick={()=>{addItemToCart(product)}} type="button" buttonType={BUTTON_TYPE_CLASSES.inverted}>ADD TO CART</Button>
        </div>
    </div>
  )
}

export default ProductCard;