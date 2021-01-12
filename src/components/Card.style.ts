import styled from 'styled-components';

export const Wrapper = styled.div`
    .card {
        margin:2px;
        border:1px;
    }

    .card button{
        border: transparent;
        border-radius: 2em;
        background: transparent;
    }

    .card img{
        border-radius: 2em;
        display: flex;
        width: 120px;
        height: 120px;
    }

    .hexagon-wrapper {
    margin: auto;
    display: flex;
    text-align: initial;
    width: 200px;
    height: 200px;
    cursor: pointer;
    }

    .hexagon {
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: white;
    background: linear-gradient(-180deg, white, #fda3b2);
    display: flex;
    align-content: center;
    justify-content: center;
    transition: 0.5s;
    }

    .hexagon img {
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: white;
    background: linear-gradient(-180deg, white, #fda3b2);
    display: flex;
    align-content: center;
    justify-content: center;
    transition: 0.5s;
    }

    .hexagon button {
    z-index: 1;
    margin: auto;
    font-size: 50px;
    color: transparent;
    background: linear-gradient(45deg, #a58fe9, #e37682);
    background-clip: text;
    -webkit-background-clip: text;
    }

    .hexagon:before,
    .hexagon:after {
    position: absolute;
    content: "";
    background: inherit;
    height: 100%;
    width: 100%;
    border-radius: 0;
    transition: 0.5s;
    transform-origin: center;
    }
    .hexagon:before {
    transform: rotateZ(60deg);
    }
    .hexagon:after {
    transform: rotateZ(-60deg);
    }
    .hexagon:hover {
    border-radius: 50px;
    transition: 0.5s;
    }
    .hexagon:hover:before {
    border-radius: 50px;
    transition: 0.5s;
    }
    .hexagon:hover:after {
    border-radius: 50px;
    transition: 0.5s;
    }
`