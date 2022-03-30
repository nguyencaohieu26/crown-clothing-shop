import { Fragment,useContext } from 'react';
import { NavigationContainer,LogoContainer,NavLinks,NavLink } from './navigation.styles';
import {Outlet} from 'react-router-dom';
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
        <NavigationContainer>
          <LogoContainer to="/" >
            <CrwnLogo className='logo'/>
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/shop'>About us</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            {currentUser ? (<NavLink as='span' onClick={signOutHandle}>
              Sign Out
            </NavLink>): (<NavLink to='/auth'>Log in</NavLink>)}
            <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropDown/>}
        </NavigationContainer>
        <Outlet/>
        <Footer/>
      </Fragment>
    )
  }
  export default Navbar;