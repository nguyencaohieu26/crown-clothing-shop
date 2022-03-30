import { Fragment,useContext } from 'react';
import './navigation.styles.scss';
import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/images/crown.svg';
import {UserContext} from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase.utlis';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import Footer from '../../components/footer/footer.component';

const Navbar = () =>{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  const signOutHandle = async () =>{
   await signOutUser();
  }

    return(
      <Fragment>
        <nav className='navigation'>
          <Link to="/" className='logo-container'>
            <CrwnLogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>Shop</Link>
            <Link className='nav-link' to='/shop'>About us</Link>
            <Link className='nav-link' to='/contact'>Contact</Link>
            {currentUser ? (<span className='nav-link' onClick={signOutHandle}>
              Sign Out
            </span>): (<Link className='nav-link' to='/auth'>Log in</Link>)}
            <CartIcon/>
          </div>
          {isCartOpen && <CartDropDown/>}
        </nav>
        <Outlet/>
        <Footer/>
      </Fragment>
    )
  }
  export default Navbar;