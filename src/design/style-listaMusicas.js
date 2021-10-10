import styled from 'styled-components';

export const Lista = styled.div`
    margin-top: 25px;
    display:flex;
    width: 5100px;
    background-color: #141616;
    margin-left: 50px;
    padding-bottom: 100px;
    &:hover {
            transition: all 25s;
            margin-left: -3900px;
        }

    div {
       
        display: flex;
        align-items: center;
        
    }
    img {
        border-radius:10px;
        margin-right: 32px;
        width: 170px;
        height: 170px;
    }
    div >div {
        position: absolute;
        margin-top: 275px;
        margin-left: 35px;
        display: flex;
        flex-direction: row;
        background-color: #141616;
        width:100px;
        height:100px;
        text-align: center;
        justify-content: center;
    }
    p {
        color:white;
        margin-top: -20px;
        margin-left: 5px;
    }
  
`;

