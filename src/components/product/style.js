import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex:1;
align-items: center;
justify-content: center;
width: 90%;
padding: 5vh;
line-height: 30px;
ul{
    display: flex;
}
li{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    span{
        margin: 5px;
    }
    button{
        width: 100%;
        border: none;
        border-radius: 50px;
        height: 3vh;
        color: #264653;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        :hover{
            background-color: #264653;
            color: white;
            transition: 0.5s;
            cursor: pointer;
        }
    }
    
   
}
img{
    width: 200px;
    height: 250px;
   
    transition: 0.5s;
    :hover{
      
    }
   
}

`