import React from "react";
import BoardGenerator from "./BoardGenarator";
import { Bishop } from "./Pawns";
import { King } from "./Pawns";
import { Queen } from "./Pawns";
import { Knight } from "./Pawns";
import { Tower } from "./Pawns";
import { Pawn } from "./Pawns";
import Timer from "./Timer";
import Bpawn from "../Sprites/pawns/Bpawn.png";
import Btower from "../Sprites/pawns/Btower.png";
import Bknight from "../Sprites/pawns/Bknight.png";
import Bbishop from "../Sprites/pawns/Bbishop.png";
import Bking from "../Sprites/pawns/Bking.png";
import Bqueen from "../Sprites/pawns/Bqueen.png";
import Rpawn from "../Sprites/pawns/Rpawn.png";
import Rtower from "../Sprites/pawns/Rtower.png";
import Rknight from "../Sprites/pawns/Rknight.png";
import Rbishop from "../Sprites/pawns/Rbishop.png";
import Rking from "../Sprites/pawns/Rking.png";
import Rqueen from "../Sprites/pawns/Rqueen.png";
class Game extends React.Component{
    constructor(props) {
        super(props);   

        this.state = {
            player1: "",
            player2: "",
            currPlayer: 1,
            redKnockedoutPieces: [],
            blueKnockedoutPieces: [],
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

    LEGACY_handleOnClick(spot){

        const fields = this.state.fields.slice();
        
        //console.log(fields[spot].player);

        console.log(this.state.selection);
        //console.log("przed", fields[spot].style);

        if(this.state.selection === -1){
            if(!fields[spot] || fields[spot].player !== this.state.currPlayer){
                this.setState({
                    feedback: "Niepoprawny wybór. Wybierz pionki " + this.state.currPlayer + " gracza"
                });
                //delete(fields[spot].style.backgroundColor);
            }else{
                fields[spot].style = {...fields[spot].style, backgroundColor: "gray"};
                console.log("2", fields[spot].style);
                this.setState({
                    feedback: "Wybierz gdzie chcesz przesunąć pionek",
                    selection: spot
                })
            }
        }else if(this.state.selection > -1){
            //delete fields[this.state.selection].style.backgroundColor;
            if(fields[spot] && fields[spot].player === this.state.currPlayer){
                this.setState({
                    feedback: "Niepoprawny wybór. Wybierz ponownie pionek i miejsce docelowe",
                    selection: -1
                });
            }else{
                const fields = this.state.fields.slice();
                const redKnockedoutPieces = this.state.redKnockedoutPieces.slice();
                const blueKnockedoutPieces = this.state.blueKnockedoutPieces.slice();
                const destinationOccupied = fields[spot]? true : false;
                const movePosible = fields[this.state.selection].checkMove(this.state.selection, spot, destinationOccupied);
                const pathfind = fields[this.state.selection].pathfinding(this.state.selection, spot);
                const legalMove = this.legalMove(pathfind);
                
                if(movePosible && legalMove){
                    if(fields[spot] !== null){
                        if(fields[spot].player === 1){
                            redKnockedoutPieces.push(fields[spot]);
                        }else{
                            blueKnockedoutPieces.push(fields[spot]);
                        }
                    }
                }
                console.log("redFallenPieces", redKnockedoutPieces);
                console.log("blueFallenPieces", blueKnockedoutPieces);

                fields[spot] = fields[this.state.selection];
                fields[this.state.selection] = null;
                var player = this.state.currPlayer === 1?2:1;
                var turn = this.state.turn === 'red'?'black':'red';
                this.setState({
                    selection: -1,
                    fields: fields,
                    RedFallenPices: redKnockedoutPieces,
                    BlueFallenPices: blueKnockedoutPieces,
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

       // console.log("po", fields[spot].style);
    }

    handleOnClick(spot){
        const fields = [...this.state.fields];

        if(this.state.selection === -1){
            if(!fields[spot] || fields[spot].player !== this.state.currPlayer){
                this.setState({feedback: "Wybierz pionki gracza numer " + this.state.currPlayer});
                if(fields[spot]){
                    fields[spot].style = {...fields[spot].style, backgroundColor: ""};
                }
            }else{
                fields[spot].style = {...fields[spot], backgroundColor: "gray"};
                this.setState({
                    feedback: "Wybierz miejsce docelowe dla pionka",
                    selection: -1
                })
            }return;
        }

        fields[this.state.selection].style = {...fields[this.state.selection].style, backgroundColor: ""};

        if(fields[spot] && fields[spot].player === this.state.currPlayer){
            this.setState({
                feedback: "Błędny wybór. Wybierz ponownie miejsce docelowe dla pionka",
                selection: -1
            })
        }else{
            const redKnockedoutPieces = [];
            const blueKnockedoutPieces = [];
            const occupiedByEnemy = Boolean(fields[spot]);
            const checkMove = fields[this.state.selection].checkMove(this.state.selection, spot, occupiedByEnemy);

            if(checkMove){
                if(fields[spot]!==null){
                    if(fields[spot].player===1) redKnockedoutPieces.push(fields[spot]);
                    else blueKnockedoutPieces.push(fields[spot]);
                }

                fields[spot] = fields[this.state.selection];
                fields[this.state.selection] = null;

                const checked = this.CheckedPlayer(fields, this.state.currPlayer);

                if(checked){
                    this.setState(oldState => ({
                        feedback: "Błędny wybór. Wybierz ponownie miejsce docelowe dla pionka. Gracz "+this.state.currPlayer+" został zaszachowany",
                        selection: -1,
                    }))
                }else{
                    var player = this.state.currPlayer === 1?2:1;
                    var turn = this.state.turn === 'red'?'blue':'red'

                    this.setState(oldState=>({
                        selection:-1,
                        fields,
                        redKnockedoutPieces: [...oldState.redFallenPices, ...redKnockedoutPieces],
                        blueKnockedoutPieces: [...oldState.blueFallenPices, ...blueKnockedoutPieces],
                        currPlayer: player,
                        feedback: '',
                        turn
                    }));
                }

            }else{
                this.setState({
                    feedback: "Błędny wybór. Wybierz ponownie miejsce docelowe dla pionka",
                    selection: -1
                })
            }
        }
    }

    KingPos(fields, player){
        return fields.reduce((active, current, spot)=>active || ((current &&(current.getPlayer() === player))&&(current instanceof King) && spot),null)
    }

    CheckedPlayer(fields, player){
        const opfor = player === 1 ? 2 : 1;
        const playersKingPos = this.KingPos(fields, player)
        const kingEndangered = (piece, spot) => piece.isMovePossible(playersKingPos, spot, fields)
        return fields.reduce((acc,curr,idx)=>acc||(curr && (curr.getPlayer() === opfor)&&kingEndangered(curr, idx)&& true),false)
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
            fields[i] = new Pawn(2, {backgroundImage: `url(${Bpawn})`})
            fields[i+40] = new Pawn(1, {backgroundImage: `url(${Rpawn})`})
        }

        fields[0] = new Tower(2,{backgroundImage: `url(${Btower})`});
        fields[7] = new Tower(2,{backgroundImage: `url(${Btower})`});
        fields[56] = new Tower(1,{backgroundImage: `url(${Rtower})`});
        fields[63] = new Tower(1,{backgroundImage: `url(${Rtower})`});

        fields[1] = new Knight(2,{backgroundImage: `url(${Bknight})`});
        fields[6] = new Knight(2,{backgroundImage: `url(${Bknight})`});
        fields[57] = new Knight(1,{backgroundImage: `url(${Rknight})`});
        fields[62] = new Knight(1,{backgroundImage: `url(${Rknight})`});

        fields[2] = new Bishop(2,{backgroundImage: `url(${Bbishop})`});
        fields[5] = new Bishop(2,{backgroundImage: `url(${Bbishop})`});
        fields[58] = new Bishop(1,{backgroundImage: `url(${Rbishop})`});
        fields[61] = new Bishop(1,{backgroundImage: `url(${Rbishop})`});

        fields[3] = new Queen(2,{backgroundImage: `url(${Bqueen})`});
        fields[4] = new King(2,{backgroundImage: `url(${Bking})`});
        fields[59] = new Queen(1,{backgroundImage: `url(${Rqueen})`});
        fields[60] = new King(1,{backgroundImage: `url(${Rking})`});

        console.log(fields)
        console.log(fields[8].style)

        return fields;
    }

    render(){
        return(<div>
            <Timer/>
            <BoardGenerator fields = {this.state.fields} onClick={(spot) => this.LEGACY_handleOnClick(spot)}></BoardGenerator>
            {this.state.feedback}
        </div>);
    }   
}

export default Game;