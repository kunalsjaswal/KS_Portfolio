import styled from "styled-components";

export const SkillDiv=styled.div`
padding:1%;
margin-top:5%;

div.heading{
    text-align:center;
    padding:2% 0%;
    background:white;
    h1{
        background:white;
        color:black;
        font-size:3vw;
    }
    .desc{
        background:white;
        color:black;
        font-size:1em;
    }
}

div.main-skills{
    overflow: hidden;
    position:relative;
    margin-top:2%;
    display:grid;
    grid-template-columns: 50% 50%;
    padding:1%;
    height:auto;
        
    .aside-left{
        height:auto;
        padding:14% 1%;
        display:grid;
        grid-template-columns: 20% 80%;
        i{
            font-size:2.5vw;
            margin-left:40%;
            margin-top:10%;
        }
        i:nth-child(5){
            margin-left:45%;
        }   
        
        span{
            margin-bottom:5%;
            b{
                font-size:1.5em;
            }
            div{
                font-size:0.8em;

            }

        }
    }

    .aside-right{
        .genre{
            font-size:1.5em;
            margin:2% 0% 0.5% 10%;
        }
        .outer-bar{
            position:relative;
            width:80%;
            margin:auto;
            margin-bottom:2%;
            font-size:0.8em;
            text-align:left;
            padding:0.5%;
            background:gray;
            border-radius:20px;
            div{
                position:absolute;
                display:inline;
                background:white;
                color:black;
                transition:0.5s;
                border-radius:20px;
                font-weight:bolder;
                padding-left:3%;

            }
            span{
                color:black;
                margin-left:95%;
                width:5%;
                font-weight:bolder;
                font-size:1em;
                background:gray;
            }
            #f{
                background:lightblue;
            }
            #b{
                background:yellow;

            }
            #l{
                background:aqua;

            }
            #s{
                background:orange;

            }
        }
    }

    div.moveup{
        position:fixed;
        right:1%;
        bottom:1%;
        width:3%;
        background:transparent;
        border-radius:50px;
        cursor:pointer;
        img{
            border-radius:50px;
            width:100%;
            background:white;
        }
        
    }
}



@media (max-width:1280px) {
    div.main-skills{
        .aside-left{
            i{
                font-size:2vw;
                margin-top:10%;
            }
            span{
                b{
                    font-size:1.5em;
                }
                div{
                    font-size:1em;
    
                }
    
            }

        }

        .aside-right{
            .genre{
                font-size:1.2em;
            }
            .outer-bar{
                position:relative;
                width:90%;
                margin-bottom:0.5%;
                font-size:0.8em;
            }
        }
    }
}
@media (max-width:1024px) {
    div.main-skills{
        .aside-left{
            i{
                font-size:2vw;
                margin-top:10%;
            }
            span{
                b{
                    font-size:1.2em;
                }
                div{
                    font-size:0.8em;
    
                }
    
            }

        }
        .aside-right{
            .genre{
                font-size:1em;
            }
            .outer-bar{
                position:relative;
                width:90%;
                margin-bottom:0.5%;
                font-size:0.6em;
            }
        }
    }
}

@media (max-width:800px) {


    div.heading{
        h1{
            font-size:4vw;
        }
        .desc{
            background:white;
            color:black;
            font-size:1em;
        }
    }


    div.main-skills{
        display:block;
        .aside-left{
            padding:5%;
            i{
                font-size:4vw;
                margin-top:5%;
            }
            span{
                b{
                    font-size:1.5em;
                }
                div{
                    font-size:1em;
                }
    
            }

        }
        .aside-right{
            .genre{
                font-size:1.2em;
            }
            .outer-bar{
                position:relative;
                width:80%;
                margin-bottom:0.5%;
                font-size:0.8em;
                
            }
        }
        div.moveup{
            width:5%;
        }
    }
}
@media (max-width:520px) {


    div.heading{
        h1{
            font-size:4.5vw;
        }
        .desc{
            font-size:0.8em;
        }
    }


    div.main-skills{
        display:block;
        .aside-left{
            padding:5% 0%;
            i{
                font-size:1.8em;
                margin-top:5%;
            }
            span{
                b{
                    font-size:1.2em;
                }
                div{
                    font-size:0.8em;
                }
    
            }

        }
        .aside-right{
            .genre{
                font-size:1.2em;
            }
            .outer-bar{
                width:90%;
                font-size:0.7em;
                span{
                    width:5%;
                    margin-left:92%;
                }
            }
        }
        div.moveup{
            width:10%;
        }
    }
}
`