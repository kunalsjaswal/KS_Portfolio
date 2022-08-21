import styled from "styled-components";

export const ProjectDiv=styled.div`
margin-top:5%;
margin-bottom:10%;
padding:5%;
position:relative;
h1{
    text-align:center;
    background:white;
    color:black;
    padding:5% 1%;
    width:15%;
    margin:auto;
    border-radius:50%;
    cursor:pointer;
    transition :0.5s;
    font-size:1.5em;
}


div.upperLayer , div.upperLayer2,div.upperLayer3,div.upperLayer4{
position:absolute;
margin-top:-25%;
margin-left:20%;
width:15%;
height:60%;
    img{
        width:90%;
        height:100%;
        margin-left:5%;
        border-radius:50%;
        transition:0.5s;
        cursor:pointer;
    }
    h3{
        background:transparent;
        display:none;
    }

}
div.upperLayer{
    
}
div.upperLayer2{
    margin-left:55%;
}
div.upperLayer3{
    margin-top:-5%;
    margin-left:20%;
}
div.upperLayer4{
    margin-top:-5%;
    margin-left:55%;
}
`;