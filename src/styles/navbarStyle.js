import styled from "styled-components";

export const NavbarDiv=styled.div`
color:white;
position:fixed;
display:flex;
z-index:10;
margin-top:0%;
border-bottom-right-radius: 20px;
margin-left:0%;
h1{
    font-size:2em;
    background:white;
    color:black;
    padding:0% 10%;
    border-bottom-right-radius: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    cursor: default;
   
}
@media (max-width:1280px) {
    h1{
        font-size:2.4em;
    }
}
@media (max-width:1024px) {
    h1{
        font-size:1.8em;
    }
}
@media (max-width:520px) {
    
    h1{
        font-size:1.2em; 
        padding:1%;
    }
}

`;