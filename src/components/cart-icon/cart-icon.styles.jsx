import styled from 'styled-components';
import {ReactComponent as ShoppingSvg} from '../../assets/images/shopping-bag.svg';


export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`
export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const ItemCount = styled.span`
bottom: 12px;
    font-size: 10px;
    font-weight: bold;
    position: absolute;
`
