import styled from "styled-components";

export const ContainerCart = styled.div`
background-color: #264653;
display:flex;
display: block;
text-align: center;
align-items: center;
justify-content: center;
z-index: 2;
position: absolute;
right: 0%;
width: 2%;
transition: 1s;
color: #264653;
button{
   display: none;
}
:hover{
 button{
    display: block;
 }
 color: white;
 width: 20%;
}

ul{
   width:100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
  
}
img{
   display: none;
   
}
`