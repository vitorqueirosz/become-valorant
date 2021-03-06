import styled from 'styled-components';

export const Header = styled.div`
  height: 52px;
  background: #111622;

  img {
      
      height: 100%;
      
  }
`;
export const Container = styled.div`
    

    padding: 50px 0 50px 30px;

`;
export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding-top: 20px;
    margin: 0 auto;
    max-width:  550px;
    background: #08101A;
    h1 {
        color: #fff;
        margin-bottom: 20px;
    }
   section {
    padding: 0 30px;
   }
   input {
       width: 100%;
       background: #1D2532;
       padding: 12px;
       border-radius: 4px;
       border: 0;
       margin-bottom: 10px;
       color: #A01D35;
       &::placeholder {
           color: #bbb;
           font-weight: bold;
       }
   }

   ul {
    
    width: 100%;
       background: #08101A;
       border-radius: 4px;
       border: 1px solid #A01D35;
       color: #A01D35;
       padding: 6px 10px 6px 4px;
       margin-bottom: 30px;
       
       list-style: none;
       
       li {
        padding: 4px;
        margin: 4px 0;
        cursor: pointer;
        border-bottom: 0.1px solid #CF5A6F;
        border-radius: 4px;

        &:hover {
            background: #151D27;
            color: #fff;
            
        }

        :nth-last-child(1){
            border-bottom: none;
        }
        
    }
   }

   li.selected {
        background: #A01D35;
        color: #fff;
    }

   select {
       width: 100%;
       background: #08101A;
       border-radius: 4px;
       border: 1px solid #A01D35;
       color: #A01D35;
       padding: 4px 10px 0 4px;
       margin-bottom: 30px;
     
     option {
        background: #08101A;
        color: #A01D35;
        
     }
   }
    button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #A01D35;
    border: none;
    padding: 18px;
    margin: 0 30px 30px 30px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    margin-top: 10px;
    width: 90%;
    flex: 1;

    &:hover {
            background: #C12C47;
            
    }

    }

   
   footer {
       display: flex;
       width: 100%;
       border-radius: 0 0 8px 8px;
       justify-content: center;
       background: #0E1924;
   }
   img {

       display: flex;
       justify-content: center;
       width: 100px;
       height: 50px;
   }
   
`;



