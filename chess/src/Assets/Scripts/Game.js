import React from "react";
import BoardGenerator from "./BoardGenarator";
import style from "../Style/game.module.css";
import { Bishop } from "./Pawns";
import { Empty } from "./Pawns";
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
import KnockedoutBlock from "./KnockedoutPices";

class Game extends React.Component {
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
            gameState: "STOPED",
            winner: "",
            winnerStyle: style.winnerMSGHidden,
            gameStyle: style.gameContainerHidden,
            threatSpot: -1,
            threatSel: -1,
            checked: 0
        }
        
        this.LEGACY_handleOnClick = this.LEGACY_handleOnClick.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            player1: props.player1,
            player2: props.player2,
            gameState: "RUNNING",
            gameStyle: style.gameContainer
        })
        this.timer.start(this.state.currPlayer);
    }

    LEGACY_handleOnClick(spot) {
      
        if (this.state.gameState === "RUNNING") {
            const fields = this.state.fields.slice();

            
            for (let i = 0; i < fields.length; i++) {
                if (fields[i].style !== { ...fields[i].style, border: "solid 5px red" }) {
                    fields[i].style = { ...fields[i].style, border: "" };
                }
                fields[i].style = { ...fields[i].style, backgroundColor: "" };
            }

            this.checkForPlayer(fields, this.state.currPlayer);

            if (this.state.selection === -1) {
                if (fields[spot] === Empty || fields[spot].player !== this.state.currPlayer) {
                    this.setState({
                        feedback: "Niepoprawny wybór. Wybierz pionki " + this.state.currPlayer + " gracza"
                    });
                } else {
                    fields[spot].style = { ...fields[spot].style, border: "solid 5px #80d19b" };
                    
                    this.setState({
                        feedback: "Wybierz gdzie chcesz przesunąć pionek",
                        selection: spot
                    })
                    this.showPosibleMoves(fields, spot);
                    this.updateThreatPosition(fields, spot);
                    
                }
            } else if (this.state.selection > -1) {
                
                
                fields[spot].style = { ...fields[spot].style, backgroundColor: "" };
                if (fields[spot] !== Empty && fields[spot].player === this.state.currPlayer) {
                    this.setState({
                        feedback: "Niepoprawny wybór. Wybierz ponownie pionek i miejsce docelowe",
                        selection: -1
                    });
                    fields[this.state.selection].style = { ...fields[this.state.selection].style, backgroundColor: "" };
                } else {
                    const fields = this.state.fields.slice();
                    const redKnockedoutPieces = this.state.redKnockedoutPieces.slice();
                    const blueKnockedoutPieces = this.state.blueKnockedoutPieces.slice();
                    const destinationOccupied = fields[spot].player !== 0 ? Boolean(fields[spot]) : false;
                    const movePosible = fields[this.state.selection].checkMove(this.state.selection, spot, destinationOccupied);

                    const legalMove = this.legalMove(fields[this.state.selection].pathfinding(this.state.selection, spot));
                    
                    

                    if (movePosible && legalMove) {
                        if (fields[spot] !== Empty) {
                            if (fields[spot].player === 1) {
                                if (fields[spot] instanceof King) this.gameOver(1);
                                redKnockedoutPieces.push(fields[spot]);
                                this.knocked.knockedR(fields[spot]);
                            } else if (fields[spot].player === 2) {
                                if (fields[spot] instanceof King) this.gameOver(2);
                                blueKnockedoutPieces.push(fields[spot]);
                                this.knocked.knockedB(fields[spot]);
                            }
                        }

                        fields[this.state.selection].style = { ...fields[this.state.selection].style, backgroundColor: "" };

                        fields[spot] = fields[this.state.selection];
                        fields[this.state.selection] = new Empty(0);
                        var player = this.state.currPlayer === 1 ? 2 : 1;
                        var turn = this.state.turn === 'red' ? 'black' : 'red';
                        this.setState({
                            selection: -1,
                            fields: fields,
                            RedFallenPices: redKnockedoutPieces,
                            BlueFallenPices: blueKnockedoutPieces,
                            currPlayer: player,
                            feedback: '',
                            turn: turn
                        })
                 
                        this.timer.endturn();
                        this.timer.addNum();
                        this.updateThreatPosition(fields, spot);
                    } else {
                        this.setState({
                            feedback: "Niepoprawny wybór. Wybierz ponownie pionek i miejsce docelowe",
                            selection: -1
                        })
                        fields[this.state.selection].style = { ...fields[this.state.selection].style, backgroundColor: "" };
                    }
                }
            }
        } else {
            this.setState({
                feedback: "Proszę podać graczy i nacisnąć przycisk start"
            })
        }
    }

    checkForPlayer(fields, player) {
        if (this.state.threatSpot > -1) {
            if (fields[this.state.threatSpot] instanceof King) {
                if (this.state.threatSpot !== this.state.threatSel) {
                    
                    if(fields[this.state.threatSel] instanceof Empty){this.setState({checked:0});}else{
                        fields[this.state.threatSpot].style = { ...fields[this.state.threatSpot].style, border: "solid 5px red" };
                        this.setState({checked:1});
                    }
                        
                    
                }
            }
        }
    }

    updateThreatPosition(fields, sel) {
        for (let spot = 0; spot < fields.length; spot++) {
            const destinationOccupied = fields[spot].player !== 0 ? Boolean(fields[spot]) : false;
            const movePosible = fields[sel].checkMove(sel, spot, destinationOccupied);
            const legalMove = this.legalMove(fields[sel].pathfinding(sel, spot));

            if (movePosible && legalMove) {
                if (fields[spot] instanceof Empty) {
                    //fields[spot].style = { ...fields[spot].style, backgroundColor: "#80d19b" };
                } else if (fields[spot].player !== this.state.currPlayer) {
                    //fields[spot].style = { ...fields[spot].style, backgroundColor: "#c2372d" };
                    if(fields[spot] instanceof King){
                        this.setState({
                            
                            threatSel: sel,
                            threatSpot: spot
                            
                        })
                    }
                } 
            }
        }
    }

    showPosibleMoves(fields, sel) {
        for (let spot = 0; spot < fields.length; spot++) {
            const destinationOccupied = fields[spot].player !== 0 ? Boolean(fields[spot]) : false;
            const movePosible = fields[sel].checkMove(sel, spot, destinationOccupied);
            const legalMove = this.legalMove(fields[sel].pathfinding(sel, spot));

            if (movePosible && legalMove) {
                if (fields[spot] instanceof Empty) {
                    fields[spot].style = { ...fields[spot].style, border: "solid 5px #80d19b" };
                } else if (fields[spot].player !== this.state.currPlayer) {
                    fields[spot].style = { ...fields[spot].style, border: " solid 5px #c2372d" };
                    /*if(fields[spot] instanceof King){
                        this.setState({
                            
                            threatSel: sel,
                            threatSpot: spot
                            
                        })
                    }*/
                } else if (fields[spot] === fields[this.state.selection]) {
                    fields[spot].style = { ...fields[spot].style, backgroundColor: "" };
                }
            }
        }
    }

    gameOver(player) {
        this.setState({
            gameState: "Over"
        })
        if (player === 1) {
            this.setState({
                winner: this.state.player2 + " Wygrywa!",
                winnerStyle: style.winnerMSG
            })
        } else {
            this.setState({
                winner: this.state.player1 + " Wygrywa!",
                winnerStyle: style.winnerMSG
            })
        }
        //this.timer.stop()
    }

    legalMove(pathfind) {
        var legal = true;
        let bluforPlayer = this.state.currPlayer;
        let opforPlayer = bluforPlayer === 1 ? 2 : 1;
        for (let i = 0; i < pathfind.length; i++) {
            if (this.state.fields[pathfind[i]].player === bluforPlayer || this.state.fields[pathfind[i]].player === opforPlayer) {
                legal = false;
                continue;
            }
        }
        return legal;
    }

    initChessBoard() {
        const fields = Array(64);

        for (var i = 8; i < 16; i++) {
            fields[i] = new Pawn(2, { backgroundImage: `url(${Bpawn})` })
            fields[i + 40] = new Pawn(1, { backgroundImage: `url(${Rpawn})` })
        }
        for (let i = 16; i < 48; i++) {
            fields[i] = new Empty(0);
        }

        fields[0] = new Tower(2, { backgroundImage: `url(${Btower})` });
        fields[7] = new Tower(2, { backgroundImage: `url(${Btower})` });
        fields[56] = new Tower(1, { backgroundImage: `url(${Rtower})` });
        fields[63] = new Tower(1, { backgroundImage: `url(${Rtower})` });

        fields[1] = new Knight(2, { backgroundImage: `url(${Bknight})` });
        fields[6] = new Knight(2, { backgroundImage: `url(${Bknight})` });
        fields[57] = new Knight(1, { backgroundImage: `url(${Rknight})` });
        fields[62] = new Knight(1, { backgroundImage: `url(${Rknight})` });

        fields[2] = new Bishop(2, { backgroundImage: `url(${Bbishop})` });
        fields[5] = new Bishop(2, { backgroundImage: `url(${Bbishop})` });
        fields[58] = new Bishop(1, { backgroundImage: `url(${Rbishop})` });
        fields[61] = new Bishop(1, { backgroundImage: `url(${Rbishop})` });

        fields[4] = new Queen(2, { backgroundImage: `url(${Bqueen})` });
        fields[3] = new King(2, { backgroundImage: `url(${Bking})` });
        fields[59] = new Queen(1, { backgroundImage: `url(${Rqueen})` });
        fields[60] = new King(1, { backgroundImage: `url(${Rking})` });

        return fields;
    }

    render() {
        var dotplayer= this.state.currPlayer=== 1?"Czerwoni rozgrywają turę":" Niebiescy rozgrywają turę "
            var player = this.state.currPlayer === 1 ? this.state.player1 : this.state.player2
            var styledot = this.state.currPlayer === 1 ? style.dotr:style.dotb
        var playerStyle = this.state.currPlayer === 1 ? style.playerR : style.playerB
        return (<div className={this.state.gameStyle}>
            <div className={style.leftPanel}>
                <p className={playerStyle}>Tura: {player}</p>
                <Timer player={this.state.currPlayer} ref={instance => { this.timer = instance; }} /><br />
             
                <p className={style.feedback}>{this.state.feedback}</p>
                <KnockedoutBlock ref={instances => { this.knocked = instances }} />
                <p className={this.state.winnerStyle}>{this.state.winner}</p>
                
            </div>
            <div className={styledot}>{dotplayer}</div>
            <BoardGenerator className={style.board} fields={this.state.fields} onClick={(spot) => this.LEGACY_handleOnClick(spot)}></BoardGenerator>
            
        </div>);
    }
}

export default Game;