import React from "react";
import BoardGenerator from "./BoardGenarator";
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
            currPlayer: 1,
            RedFallenPices: [],
            BlueFallenPices: [],
            turn: "red",
            feedback: "",
            fields: this.initChessBoard(),
            selection: -1,
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
        
        //console.log(fields[spot].player);

        console.log(this.state.selection);

        if(this.state.selection === -1){
            if(!fields[spot] || fields[spot].player !== this.state.currPlayer){
                this.setState({
                    feedback: "Niepoprawny wybór. Wybierz pionki " + this.state.currPlayer + " gracza"
                });
              
            }else{
                fields[spot].style = {...fields[spot].style, backgroundColor: "black"};
                this.setState({
                    feedback: "Wybierz gdzie chcesz przesunąć pionek",
                    selection: spot
                })
            }
        }else if(this.state.selection > -1){
   
            if(fields[spot] && fields[spot].player === this.state.currPlayer){
                this.setState({
                    feedback: "Niepoprawny wybór. Wybierz ponownie pionek i miejsce docelowe",
                    selection: -1
                });
            }else{
                const fields = this.state.fields.slice();
                const redFallenPices = this.state.RedFallenPices.slice();
                const blueFallenPices = this.state.BlueFallenPices.slice();
                const destinationOccupied = fields[spot]? true : false;
                const movePosible = fields[this.state.selection].checkMove(this.state.selection, spot, destinationOccupied);
                const pathfind = fields[this.state.selection].pathfinding(this.state.selection, spot);
                const legalMove = this.legalMove(pathfind);
                
                if(movePosible && legalMove){
                    if(fields[spot] !== null){
                        if(fields[spot].player === 1){
                            redFallenPices.push(fields[spot]);
                        }else{
                            blueFallenPices.push(fields[spot]);
                        }
                    }
                }
                console.log("redFallenPieces", redFallenPices);
                console.log("blueFallenPieces", blueFallenPices);

                fields[spot] = fields[this.state.selection];
                fields[this.state.selection] = null;
                var player = this.state.currPlayer === 1?2:1;
                var turn = this.state.turn === 'red'?'black':'red';
                this.setState({
                    selection: -1,
                    fields: fields,
                    RedFallenPices: redFallenPices,
                    BlueFallenPices: blueFallenPices,
                    currPlayer: player,
                    feedback:'',
                    turn: turn
                })
            }
        }else{
            this.setState({
                feedback: "Niepoprawny wybór. Wybierz ponownie pionek i miejsce docelowe",
                selection: -1
            })
        }
    }

    legalMove(pathfind){
        var legal = true;
        for(let i = 0; i<pathfind.length;i++){
            if(this.state.fields[pathfind[i]] !== null){
                legal = false;
            }
        }
        return legal;
    }

    initChessBoard(){
        const fields = Array(64).fill(null);

        for(var i = 8; i<16;i++){
            fields[i] = new Pawn(2)
            fields[i+40] = new Pawn(1)
        }

        fields[0] = new Tower(2);
        fields[7] = new Tower(2);
        fields[56] = new Tower(1);
        fields[63] = new Tower(1);

        fields[1] = new Knight(2);
        fields[6] = new Knight(2);
        fields[57] = new Knight(1);
        fields[62] = new Knight(1);

        fields[2] = new Bishop(2);
        fields[5] = new Bishop(2);
        fields[58] = new Bishop(1);
        fields[61] = new Bishop(1);

        fields[3] = new Queen(2);
        fields[4] = new King(2);
        fields[59] = new Queen(1);
        fields[60] = new King(1);

        console.log(fields)

        return fields;
    }

    render(){
        return(<div>
            <Timer/>
            <BoardGenerator fields = {this.state.fields} onClick={(spot) => this.handleOnClick(spot)}></BoardGenerator>
            {this.state.feedback}
        </div>);
    }   
}

export default Game;