import React from "react";
import BoardGenerator from "./BoardGenarator";
import style from "../Style/game.module.css";
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
            gameStyle: style.gameContainerHidden
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

            //console.log(fields[spot].player);

            console.log(this.state.selection);
            //console.log("przed", fields[spot].style);

            if (this.state.selection === -1) {
                if (!fields[spot] || fields[spot].player !== this.state.currPlayer) {
                    this.setState({
                        feedback: "Niepoprawny wybór. Wybierz pionki " + this.state.currPlayer + " gracza"
                    });
                } else {
                    //fields[spot].style = {...fields[spot].style, backgroundColor: "gray"};
                    console.log("2", fields[spot].style);
                    this.setState({
                        feedback: "Wybierz gdzie chcesz przesunąć pionek",
                        selection: spot
                    })
                }
            } else if (this.state.selection > -1) {
                //fields[spot].style = {...fields[spot].style, backgroundColor: ""};
                if (fields[spot] && fields[spot].player === this.state.currPlayer) {
                    this.setState({
                        feedback: "Niepoprawny wybór. Wybierz ponownie pionek i miejsce docelowe",
                        selection: -1
                    });
                } else {
                    const fields = this.state.fields.slice();
                    const redKnockedoutPieces = this.state.redKnockedoutPieces.slice();
                    const blueKnockedoutPieces = this.state.blueKnockedoutPieces.slice();
                    const destinationOccupied = fields[spot] ? true : false;
                    const movePosible = fields[this.state.selection].checkMove(this.state.selection, spot, destinationOccupied);
                    const pathfind = fields[this.state.selection].pathfinding(this.state.selection, spot);
                    const legalMove = this.legalMove(pathfind);

                    console.log(movePosible, legalMove);

                    if (movePosible && legalMove) {
                        if (fields[spot] !== null) {
                            if (fields[spot].player === 1) {
                                if (fields[spot] instanceof King) this.gameOver(1)
                                redKnockedoutPieces.push(fields[spot]);
                            } else {
                                if (fields[spot] instanceof King) this.gameOver(2)
                                blueKnockedoutPieces.push(fields[spot]);
                            }
                        }

                        console.log("redFallenPieces", redKnockedoutPieces);
                        console.log("blueFallenPieces", blueKnockedoutPieces);

                        fields[spot] = fields[this.state.selection];
                        fields[this.state.selection] = null;
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
                    } else {
                        this.setState({
                            feedback: "Niepoprawny wybór. Wybierz ponownie pionek i miejsce docelowe",
                            selection: -1
                        })
                    }
                }
            }
        } else {
            this.setState({
                feedback: "Proszę podać graczy i nacisnąć przycisk start"
            })
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
    }

    UNUSED_handleOnClick(spot) {
        const fields = [...this.state.fields];

        if (this.state.selection === -1) {
            if (!fields[spot] || fields[spot].player !== this.state.currPlayer) {
                this.setState({ feedback: "Wybierz pionki gracza numer " + this.state.currPlayer });
                if (fields[spot]) {
                    fields[spot].style = { ...fields[spot].style, backgroundColor: "" };
                }
            } else {
                fields[spot].style = { ...fields[spot], backgroundColor: "gray" };
                this.setState({
                    feedback: "Wybierz miejsce docelowe dla pionka",
                    selection: -1
                })
            } return;
        }

        fields[this.state.selection].style = { ...fields[this.state.selection].style, backgroundColor: "" };

        if (fields[spot] && fields[spot].player === this.state.currPlayer) {
            this.setState({
                feedback: "Błędny wybór. Wybierz ponownie miejsce docelowe dla pionka",
                selection: -1
            })
        } else {
            const redKnockedoutPieces = [];
            const blueKnockedoutPieces = [];
            const occupiedByEnemy = Boolean(fields[spot]);
            const checkMove = fields[this.state.selection].checkMove(this.state.selection, spot, occupiedByEnemy);

            if (checkMove) {
                if (fields[spot] !== null) {
                    if (fields[spot].player === 1) redKnockedoutPieces.push(fields[spot]);
                    else blueKnockedoutPieces.push(fields[spot]);
                }
                this.knocked.knocked(this.state.redKnockedoutPieces,this.state.blueKnockedoutPieces);
                fields[spot] = fields[this.state.selection];
                fields[this.state.selection] = null;

                const checked = this.CheckedPlayer(fields, this.state.currPlayer);

                if (checked) {
                    this.setState(oldState => ({
                        feedback: "Błędny wybór. Wybierz ponownie miejsce docelowe dla pionka. Gracz " + this.state.currPlayer + " został zaszachowany",
                        selection: -1,
                    }))
                } else {
                    var player = this.state.currPlayer === 1 ? 2 : 1;
                    var turn = this.state.turn === 'red' ? 'blue' : 'red'

                    this.setState(oldState => ({
                        selection: -1,
                        fields,
                        redKnockedoutPieces: [...oldState.redFallenPices, ...redKnockedoutPieces],
                        blueKnockedoutPieces: [...oldState.blueFallenPices, ...blueKnockedoutPieces],
                        currPlayer: player,
                        feedback: '',
                        turn
                    }));
                  
                }

            } else {
                this.setState({
                    feedback: "Błędny wybór. Wybierz ponownie miejsce docelowe dla pionka",
                    selection: -1
                })
            }
        }
    }


    legalMove(pathfind) {
        var legal = true;
        for (let i = 0; i < pathfind.length; i++) {
            if (this.state.fields[pathfind[i]] !== null) {
                legal = false;
            }
        }
        return legal;
    }

    initChessBoard() {
        const fields = Array(64).fill(null);

        for (var i = 8; i < 16; i++) {
            fields[i] = new Pawn(2, { backgroundImage: `url(${Bpawn})` })
            fields[i + 40] = new Pawn(1, { backgroundImage: `url(${Rpawn})` })
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

        fields[3] = new Queen(2, { backgroundImage: `url(${Bqueen})` });
        fields[4] = new King(2, { backgroundImage: `url(${Bking})` });
        fields[59] = new Queen(1, { backgroundImage: `url(${Rqueen})` });
        fields[60] = new King(1, { backgroundImage: `url(${Rking})` });

        console.log(fields)
        console.log(fields[8].style)

        return fields;
    }

    render() {
        var player = this.state.currPlayer===1?this.state.player1:this.state.player2
        var playerStyle = this.state.currPlayer===1?style.playerR:style.playerB
        return (<div className={this.state.gameStyle}>
            <div className={style.leftPanel}>
                <p className={playerStyle}>Tura: {player}</p>
                <Timer player={this.state.currPlayer} ref={instance => { this.timer = instance; }} /><br />
                <p className={style.feedback}>{this.state.feedback}</p>
                <div>
                    <KnockedoutBlock redKnockedoutPieces={this.state.redKnockedoutPieces} blueKnockedoutPieces={this.state.blueKnockedoutPieces} ref={instances=>{this.knocked =instances}}/>
                </div>
                <p className={this.state.winnerStyle}>{this.state.winner}</p>
            </div>
            <div className={style.board}>
                <BoardGenerator fields={this.state.fields} onClick={(spot) => this.LEGACY_handleOnClick(spot)}></BoardGenerator>
            </div>

        </div>);
    }
}

export default Game;