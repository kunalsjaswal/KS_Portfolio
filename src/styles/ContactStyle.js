import styled from "styled-components";

export const ContactDiv=styled.div`
display:grid;
grid-template-columns: 35% 65%;
margin-top:5%;

.left-part{
    img{
        width:100%;
        height:100%;
    }
}

.right-part{
    background:white;
    color:black;
    padding:5%;

    h1{
        color:black;
        background:white;
        text-align:center;
        padding-top:2%;
        
    }
    p{
        color:black;
        background:white;
        display:grid;
        grid-template-columns: 40% 40%;
        justify-content: right;
        margin-top:5%;

        div.left{    
            display:grid;
            grid-template-columns: 20% 80%;
            background:white;

            i{
                background:white;
                color:black;
                font-size:2em;
                padding-left:40%;
            }
            span{
                background:white;
                color:black;
                padding-bottom:10%;

            }
        }
        div.right{    
            display:grid;
            grid-template-columns: 20% 80%;
            background:white;

            i{
                background:white;
                color:black;
                font-size:2em;
                padding-left:40%;

            }
            span{
                background:white;
                color:black;
                padding-bottom:10%;
            }
        }

    }
}



@media (max-width:1024px) {
    .right-part{

        p{
            justify-content: space-evenly;

            div.left{
                i{
                    font-size:1.5em;
                 }
                 span{
                    font-size:0.8em;
                    margin-left:5%;
                 }
            }
            div.right{

                i{
                    font-size:1.5em;
     
                 }
                 span{
                    font-size:0.8em;
                    margin-left:5%;

                 }
            }
           
        }
    }
}

@media (max-width:800px) {
    display: flex;
    flex-direction: column-reverse;

    .right-part{
        font-size:0.8em;

        p{
            display:block;
            border:0;

            div.left{
                width:80%;
                margin-left:20%;
                i{
                    font-size:2.5em;

     
                 }
                 span{
                    font-size:1.8em;
                    padding-bottom:5%;     
                 }
            }
            div.right{
                width:80%;
                margin-left:20%;

                i{
                    font-size:2.5em;
     
                 }
                 span{
                     font-size:1.8em;
                     padding-bottom:5%;     

                 }
            }
           
        }
    }
}

@media (max-width:520px) {

    background:white;
    .right-part{

        p{

            div.left{
                width:80%;
                margin-left:15%;
                i{
                    font-size:1.5em;

     
                 }
                 span{
                    font-size:1.2em;
                    padding-bottom:5%;     
                 }
            }
            div.right{
                width:80%;
                margin-left:15%;
                i{
                    font-size:1.5em;
     
                 }
                 span{
                     font-size:1.2em;
                     padding-bottom:5%;     

                 }
            }
           
        }
    }
}

`;