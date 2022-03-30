import styled from 'styled-components';

/**
 * Create a BaseButton style
 */
export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 40px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  border-radius: 2px;
  justify-content: center;  
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
//extend on Base Button
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`
export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`