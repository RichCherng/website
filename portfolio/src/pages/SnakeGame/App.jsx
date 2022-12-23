import { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap"
import OffCanvas from "../../components/OffCanvas"
import Board from "./Board"

import './App.css'
import { isShorthandPropertyAssignment } from "typescript";
const SnakeGame = () => {
    const ref = useRef(null);
    const [state, setState] = useState({});
    const score = 0;


    useEffect(() => {
        setState({...initState(ref)});
        startGame();

        return () => {
            clearTimeout(state.timeoutId);
        }
    }, [])
    

    const startGame = () => {
        // game loop
        loop();
    }
    
    const loop = () => {
        console.log("Loop")
        let timeoutId = setTimeout(() => {
            // move snake
            // check collision
            // check eat apple
            
            loop();
        }, 1000) // 1 sec

        this.setState({timeoutId})
    }

    return (
        <Container id="GameBoard" >
            <div>
                <OffCanvas />
                <h1 style={style.mystyle}>Snake Game</h1>
                <div id="score">{score}</div>    
            </div>
            <div ref={ref}>
                <Board state={state}/>
            </div>
        </Container>
    )
}

const initState = (ref) => {
    // Game size initialization
    let width = ref.current.offsetWidth;
    let height = (width / 3) * 2;
    let blockWidth = width / 30;
    let blockHeight = height / 20;

    // snake initialization
    // let startSnakeSize = 2
    let snake_x = width / 2;
    let snake_y = height / 2;
    let snakeHead = {x: snake_x, y: snake_y};
    let snake = [snakeHead, {x: snake_x - blockWidth, y: snake_y}];

    return {
        width,
        height,
        blockWidth,
        blockHeight,
        // startSnakeSize,
        snake,
        // apple: { x: apple_x, y: apple_y}
    }
}



const style = {
    mystyle : {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    },
    snakeboard: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
}


export default SnakeGame