import React from 'react'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'

export default function Player(){
    const navigate=useNavigate();
    return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={() => navigate(-1)} />
            </div>
            <ReactPlayer className="video" url="https://www.youtube.com/watch?v=HhesaQXLuRY" playing loop controls />
        </div>
    </Container>
    )
}

const Container=styled.div`
    .player {
        height: 100vh;
        width: 100vw;
        .back {
            position: absolute;
            padding: 2rem;
            z-index: 1;
            svg {
                font-size: 3rem;
                cursor: pointer;
            }
        }
        .video {
            height: 100vh !important;
            width: 100vw !important;
        }
    }
`;
