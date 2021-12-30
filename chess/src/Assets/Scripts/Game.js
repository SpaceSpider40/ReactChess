import React from "react";
import Board from "./GenerateBoard";
import { Bishop } from "./Pawns";
import { King } from "./Pawns";
import { Queen } from "./Pawns";
import { Knight } from "./Pawns";
import { Tower } from "./Pawns";
import { Pawn } from "./Pawns";
import Timer from "./Timer";

class Game extends React.Component{
    constructor(props) {
        super(props);   

        this.state = {
            player1: "",
            player2: "",
            RedFallenPices: [],
            BlueFallenPices: [],
            turn: 1,
            feedback: "",
            fields: this.initChessBoard()
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            player1: props.player1,
            player2: props.player2
        })
    }

    handleOnClick(spot){
        const fields = this.state.fields.slice();
        
        if(fields[spot] && fields[spot].player === this.state.player){
            
        }
    }

    initChessBoard(){
        const fields = Array(64).fill(null);

        for(var i = 8; i<16;i++){
            fields[i] = new Pawn(2)
            fields[i+40] = new Pawn(1)
        }

        fields[0]=new Tower(2);
        fields[7]=new Tower(2);
        fields[56]=new Tower(1);
        fields[63]=new Tower(1);

        fields[1]=new Knight(2);
        fields[6]=new Knight(2);
        fields[57]=new Knight(1);
        fields[62]=new Knight(1);

        fields[2]=new Bishop(2);
        fields[5]=new Bishop(2);
        fields[58]=new Bishop(1);
        fields[61]=new Bishop(1);

        fields[3]=new Queen(2);
        fields[4]=new King(2);
        fields[59]=new Queen(1);
        fields[60]=new King(1);

        return fields;
    }

    render(){
        return(<div>
            <Timer/>
            <Board handleOnClick={this.handleOnClick}/>
        </div>);
    }   
}

export default Game;