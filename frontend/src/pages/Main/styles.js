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

    h1 {
        font-size: 32px;
        color: #fff;

        span {
            /* text-decoration: underline; */
            font-size: 42px;
            filter: brightness(1.5);
            font-family: -apple-system, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            /* display: flex;
            padding-left: 100px; */
            color: #C12743;
            
        }
    }
`;
export const DivLogin = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 20px 15px 20px;
    width: 310px;
    box-shadow: 2px 2px 4px rgba(0,0,0, 0.5);

    border-radius: 6px;
    background: #08101A;
    margin: 0 auto;

    img {
        
        width: 105px;
        height: 67px;
    }

    form{
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #A01D35;
        border: none;
        padding: 18px;
        width: 230px;
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
        margin-top: 10px;
        text-decoration: none;

        &:hover {
            background: #C12C47;
            
        }
    }
    
    }


     aside {
        padding-top: 50px;
        display: flex;
        justify-content: space-between;

        a {
            
            text-decoration: none;
            color: #9a9a9a;
            font-size: 11px;
        }
    }
   
`;



