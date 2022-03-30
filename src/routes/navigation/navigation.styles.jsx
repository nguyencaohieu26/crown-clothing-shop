import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`
export const LogoContainer = styled(Link)`
     height: 100%;
     width: 70px;
     padding: 25px;
`
export const NavLinks = styled.div`
     width: 50%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: flex-end;
`

export const NavLink = styled(Link)`
       padding: 10px 15px;
       font-size: 15px;
       cursor: pointer;
       border-radius: 3px;
       transition: 0.3s all ease-out;
       &:hover{
        background-color: rgba(221, 184, 221, 0.63);
       }
`

