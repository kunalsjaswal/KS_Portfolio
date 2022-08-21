import styled from "styled-components";

export const LandPageDiv=styled.div`
    display:grid;
    grid-template-columns: 60% 40%;

    p{
        color:white;
        width:80%;
        margin:auto;

        h1{
            font-size:2em;
            margin-bottom:2%;
            text-decoration: underline;
            text-decoration-color: yellow;
        }
        span{
            font-size:1.2em;
            width:80%;

        }
        a{
            text-decoration: none;
            color:white;
            background:red;
            padding:0% 2%;
            border-radius:10px;
            font-size:1.2em;
            margin-left:1%;
            transition:0.5s;
        }
        a:hover{
            padding:0% 3%;
        }
    }

    img{
        border-radius:35px;
        position:relative;
        width:75%;
        height:90%;
        margin-left:5%;
        margin-top:10%;
        transition:0.5s;
    }

    @media (max-width:1280px) {
    p{
        h1{
            font-size:2em;
        }
        span{
            font-size:1.2em;
        }
    }
    img{
        width:80%;
        height:100%;
    }
    }
    @media (max-width:1024px) {
        p{
            h1{
                font-size:1.8em;
            }
            span{
                font-size:1em;
            }
        }
    }
    

    @media (max-width:800px) {
        display: flex;
        flex-direction: column-reverse;

        img{
            width:50%;
            height:80%;
            margin:auto;
            margin-top:20%;
        }
        p{
            margin-top:8%;
            text-align:center;
            margin-bottom:15%;
        }
    }
    @media (max-width:520px) {

        img{
            width:60%;
            height:100%;
            margin:auto;
            margin-top:15%;
        }
        p{
            text-align:center;
            width:95%;
            h1{
                font-size:1.5em;
            }
        }
    }
`