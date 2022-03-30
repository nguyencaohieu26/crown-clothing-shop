import styled from 'styled-components';
import {BaseButton,GoogleSignInButton,InvertedButton} from '../button/button.styles'

export const CartDropDownContainer = styled.div`
  width: 17rem;
  height: 340px;
  display: flex;
  padding: 20px;
  top: 90px;
  right: 10px;
  z-index: 5;
  position: absolute;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  border-radius: 2px;
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}{
    margin: 1.1rem auto 0;
    font-size: 11px;
  }
`
export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  p {
    margin: 5px 0 0;
    color: #292929;
    font-style: italic;
  }
`

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`
