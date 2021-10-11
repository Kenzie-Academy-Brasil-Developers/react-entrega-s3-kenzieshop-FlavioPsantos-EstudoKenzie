import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background-color: #264653;
color: white;
font-size: 20px;
display: flex;
align-items: center;
justify-content: space-between;
height: 5vh;

p{
    cursor: pointer;
    padding: 5vw;
}
ul{
    list-style-type: none;
    display: flex;
    padding: 5vw;
    li{
        padding: 10px;
        a{
            text-decoration: none;
            color: white;
        }
    }
}
`