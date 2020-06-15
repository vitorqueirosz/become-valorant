import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    padding: 80px 180px 100px 180px;
    
    
    max-width: 1440px;

   
`;

export const SideInfos = styled.div`
    display: flex;
    h1 {
        color: #DC5555;
        margin-bottom: 16px;
        /* padding-left: 20px; */
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    aside {
        background: #3C4F5C;
        width: 247px;
        height: 146px;
        padding: 20px;
        margin-bottom: 10px;

        display: flex;
        
        span {
            padding: 10px 0 0 20px;
            color: #fff;
            font-weight: bold;
        }
    }

    button {
        border: none;
        width: 100%;
        height: 40px;
        background: #C12743;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    svg {
        margin-right: 5px;
    }
    

`;

export const MiddleColumn = styled.div`

    border-right: 1px solid #bbb;
    max-width: 2px;
    height: 75%;
    margin-top: -80px;
    padding-left: 20px;
`;

export const Header = styled.div`
  height: 52px;
  background: #111622;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
    align-items: center;
    span {
        color: #ddd;
        font-size: 18px;
        padding: 10px 20px 10px 0;
        cursor: pointer;
    }

  img {
      
      height: 100%;
      
  }
`;

export const SideAgents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    flex-grow: 1;
    background: #30404B;
    margin-left: 20px;
    padding: 10px 30px 10px 12px;

    h1 {
        font-size: 24px;
        color: #fff;
        margin: 0 0 20px 30px;
        display: flex;
        justify-content: center;
        
    }

    img {
        height: 230px;
        width: 200px;
        
        
    }

`;
export const GridContent = styled.div`

    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 60px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        transition: 0.5s;
    transform: translateY(20px);
    }

    div {
        background: #15232D;
        margin-top: 15px;
        height: 100%;
        width: 95%;
        padding: 15px 20px 15px 10px;
        transition: padding-top 0.5s;

        &:hover {
            padding-top: 20px;
            background: #14181B;
            transition: 0.5s;
        }
    }
    header {
        display: flex;
        justify-content: space-between;
        /* grid-gap: 280px; */
        /* grid-template-columns: 1fr 1fr; */
        padding-bottom: 20px;

    span {
        font-size: 20px;
        color: #eee;
        font-weight: normal;
    :nth-last-child(1) {
            font-size: 13px;
            color: #FF5050;
        }
    }
    }

    h1 {
        font-size: 18px;
        color: #9a9a9a;
        font-weight: normal;
        margin: 0;
        display: flex;
        justify-content: start;

        span {
            font-weight: normal;
            font-size: 20px;
            color: #fff;
      
        }
    }
    li {
        list-style: none;
        color: #EBDDDD;
        padding: 5px 0 0 0;
        line-height: 18px;

        :nth-last-child(1){
            color: #FF5050;
            
        }
    }
`;
