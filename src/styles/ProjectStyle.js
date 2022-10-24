import styled from "styled-components";

export const ProjectDiv=styled.div`
div.project-info{
    display:grid;
    grid-template-columns:20% 20% 20%;
    justify-content:center;
    background:#ffffffe4;
    color:black;
    border-radius:50px;
    width:98%;
    margin:auto;
    margin-top:1%;
    padding:1% 2%;
    div{
        font-size:1.2vw;
        font-weight:bold;
        padding:5%;
        border-radius:30px;
        text-align:center;
    }
}

div.main{
margin-top: 1%;
transition: 0.5s;
h1{
    background-color: #ffffffe4;
    color: black;
    text-align: center;
    font-size: 2.5vw;
    padding: 2%;
    width: 98%;
    margin: auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    span{
        position: absolute;
        background-color: transparent;
        color: black;
        font-size: 1vw;
        text-align: center;
        width: 98%;
        margin-left: 1%;
        left: 0;
    }
}

div.temp-pages{
    
    transition: 0.5s;
    background-color: #ffffffe4;
    width: 98%;
    margin: auto;
    padding-bottom: 5%;
    padding-top:2% ;
    img{
        border: 5px solid #1d1c1c;
        border-bottom: 30px solid #1d1c1c;
        border-top: 15px solid #1d1c1c;
        width: 40%;
        height:350px;
        border-radius: 10px;
        margin-left: 30%;
        background-color: transparent;
        transition: 0.5s;
    }

    div.key-mouse{
        background: transparent;
        display: grid;
        grid-template-columns: 30% 30%;
        justify-content: center;
        img{
            
            background-color: transparent;
            border: 0px solid black;
            width: 70%;
        }
        img.tablet{
            margin-top: 10%;
            width:80%;
            height: 60%;
            border: 5px solid black;
            border-left: 15px solid black;
            border-right: 15px solid black;
        }
        img.m-img{
            width: 30%;
            cursor: pointer;
        }
    }
}
}

@media (max-width:900px) {
    div.project-info{
        grid-template-columns:30% 30% 30%;
        div{
            font-size: 2vw;
            font-weight:normal;
        }
        
    }

    div.main{

    h1{
        text-align: center;
        font-size: 3.5vw;
        padding: 2%;
        span{
            font-size: 2.5vw;
        }
    }
    
    div.temp-pages{
        padding-bottom: 10%;
        padding-top: 5%;
        img{
            width: 650px;
            height:400px;
            margin-left: 7%;
        }
       
        div.key-mouse{
        display: grid;
        grid-template-columns: 30% 30%;
        justify-content: space-evenly;
        img{
            height:100%;
            width: 120%;
        }
        img.tablet{
            margin-top: 20%;
            width:150%;
            margin-left: -20%;
            height: 70%;
            border: 5px solid black;
            border-left: 15px solid black;
            border-right: 15px solid black;
        }
        img.m-img{
            width: 50%;
            margin-left: 30%;
        }
    }
    }
    
    }

    
}
@media (max-width:520px) {
    div.project-info{
        grid-template-columns:50%;

        div{
            margin-bottom: 5%;
            font-size: 4vw;
            font-weight:normal;
        }
}

    div.main{

    h1{
        text-align: center;
        font-size: 4.5vw;
        padding: 2%;
        span{
            font-size: 3.5vw;
        }
    }
    
    div.temp-pages{
        
        padding-bottom: 10%;
        padding-top: 10%;
        img{
            width: 98%;
            height:250px;
            margin-left: 1%;
            border: 5px solid #1d1c1c;
            border-bottom: 20px solid #1d1c1c;
            border-top: 8px solid #1d1c1c;
        }

        div.key-mouse{
        display: grid;
        grid-template-columns: 30% 30%;
        justify-content: space-between;
        img{
            height:100%;
            width: 150%;
        }
        img.tablet{
            margin-top: 20%;
            width:180%;
            margin-left: 4%;
            height: 70%;
            border: 5px solid black;
            border-left: 15px solid black;
            border-right: 15px solid black;
        }
        img.m-img{
            width: 50%;
            margin-left: 30%;
        }
    }
    }
    
    }
}


`;


export const ForFunDiv=styled.div`

margin-top: 5%;
transition: 0.5s;



h1{
    margin-top: 1%;
    background-color: #ffffffe4;
    color: black;
    text-align: center;
    font-size: 2.5vw;
    padding: 2%;
    width: 98%;
    margin: auto;
    span{
        position: absolute;
        background-color: transparent;
        color: black;
        font-size: 1vw;
        text-align: center;
        width: 98%;
        margin-left: 1%;
        left: 0;
    }
}

div.temp-pages{
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: 0.5s;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    justify-content: center;
    background-color: #ffffffe4;
    width: 98%;
    margin: auto;
    padding-bottom: 10%;
    padding-top:2% ;
    img{
        width: 80%;
        height:95%;
        box-shadow: 2px 2px 5px black;
        border: 0px solid black;
        border-radius: 10px;
        margin: auto;
        transition: 0.5s;
    }
}

@media (max-width:900px) {
    
h1{
    text-align: center;
    font-size: 3.5vw;
    padding: 2%;
    span{
        font-size: 2.5vw;
    }
}

div.temp-pages{
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: space-evenly;
    grid-row-gap: 5%;
    padding-bottom: 30%;
    padding-top: 5%;
    img{
        width: 100%;
        height:100%;
    }
}

}

@media (max-width:520px) {
    
    h1{
        text-align: center;
        font-size: 4.5vw;
        padding: 2%;
        span{
            font-size: 3.5vw;
        }
    }
    
    div.temp-pages{
        display: grid;
        grid-template-columns: 90%;
        justify-content: space-evenly;
        grid-row-gap: 01%;
        padding-bottom: 50%;
        padding-top: 5%;
        img{
            width: 100%;
            height:100%;
        }
    }
    
    }
`