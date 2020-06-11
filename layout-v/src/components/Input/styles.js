import styled, { css } from 'styled-components';

export const Container = styled.div`

  background: #1D2532;
  border-radius: 10px;
  padding: 16px;
  width: 100%;


  border: 2px solid #232129;
  color: #1D2532;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }

        ${props =>
    props.isFocused &&
    css`
      color: #C12C47;
      border-color: #C12C47;
    `} 
    
    input{
    flex: 1;
    background: transparent;
    border: 0;
    color: #C12C47;
    
        
    &::placeholder {
    color: #9a9a9a;
    }
   
 }

`;



