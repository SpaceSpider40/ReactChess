import React from "react";
import Board from "./GenerateBoard";
import { Bishop } from "./Pawns";
import Timer from "./Timer";

class Game extends React.Component{
    constructor(props) {
        super(props);   

        this.state = {
            player1: "",
            player2: ""
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            player1: props.player1,
            player2: props.player2
        })
    }

    render(){
        console.log(this.state.player1,this.state.player2);
        return(<div>
            <Board/>
            <Bishop player={2}/>
            <Timer/>
        </div>);
    }   
}

export default Game;