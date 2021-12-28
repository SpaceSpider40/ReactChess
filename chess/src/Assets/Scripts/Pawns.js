import React from "react";

export class King extends React.Component{
    constructor(props){
        super(props);
        this.state = {img: ''};
        this.props.player === 1? this.setState({img: <img src="../Sprites/pawns/Wking"/>}) : this.setState({img: <img src="../Sprites/pawns/Bking"/>});
    }

    checkMove(currentLocation, destination){
        return(
            currentLocation - 9 === destination ||
            currentLocation - 8 === destination ||
            currentLocation - 7 === destination ||
            currentLocation - 1 === destination ||
            currentLocation + 1 === destination ||
            currentLocation + 7 === destination ||
            currentLocation + 8 === destination ||
            currentLocation + 9 === destination
        );
    }

    pathfinding(currentLocation, destination){
        return [];
    }
}

export class Queen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {img: ''};
        this.props.player === 1? this.setState({img: <img src="../Sprites/pawns/Wqueen"/>}) : this.setState({img: <img src="../Sprites/pawns/Bqueen"/>});
    }

    checkMove(currentLocation, destination){

        let mod = currentLocation * 8;
        let diff = 8 - mod;

        return(         
            (Math.abs(currentLocation - destination) % 9 === 0 || Math.abs(currentLocation - destination) % 7 === 0) ||
            (Math.abs(currentLocation - destination) % 8 === 0 || (destination >= (currentLocation - mod) && destination < (currentLocation + diff)))
        );
    }

    pathfinding(currentLocation, destination){
        let path = [], start, end, increment;

        if(currentLocation>destination){
            start=destination;
            end=currentLocation;
        }else{
            start=currentLocation;
            end=destination;
        }

        if(Math.abs(currentLocation-destination)%8===0){
            increment = 8;
            start += 8;
        }else if(Math.abs(currentLocation)%9===0){
            increment = 9;
            start += 9;
        }else if(Math.abs(currentLocation-destination)%7===0){
            increment = 7;
            start += 7;
        }else{
            increment = 1;
            start += 1;
        }

        for(let i = start; i < end; i+=increment){
            path.push(i);
        }

        return path;
    }
}

export class Bishop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {img: ''};
        this.props.player === 1? this.setState({img: <img src="../Sprites/pawns/Wbishop"/>}) : this.setState({img: <img src="../Sprites/pawns/Bbishop"/>});
    }

    checkMove(currentLocation, destination){
        return Math.abs(currentLocation-destination)%9===0 || Math.abs(currentLocation-destination)%7===0;
    }

    pathfinding(currentLocation, destination){
        let path = [], start, end, increment;

        if(currentLocation>destination){
            start=destination;
            end=currentLocation;
        }else{
            start=currentLocation;
            end=destination;
        }

        if(Math.abs(currentLocation-destination)%9===0){
            increment = 9;
            start += 9;
        }else{
            increment = 7;
            start += 7;
        }

        for(let i = start; i < end; i+=increment){
            path.push(i);
        }

        return path;
    }
}

export class Knight extends React.Component{
    constructor(props) {
        super(props);
        this.state = {img: ''};
        this.props.player === 1? this.setState({img: <img src="../Sprites/pawns/Wknight"/>}) : this.setState({img: <img src="../Sprites/pawns/Bknight"/>});
    }

    checkMove(currentLocation, destination){
        return(
            currentLocation - 17 === destination ||
            currentLocation - 15 === destination ||
            currentLocation - 10 === destination ||
            currentLocation + 6 === destination ||
            currentLocation + 15 === destination ||
            currentLocation - 6 === destination ||
            currentLocation + 10 === destination ||
            currentLocation + 17 === destination
        )
    }

    pathfinding(currentLocation, destination){
        return [];
    }
}

export class Tower extends React.Component{
    constructor(props) {
        super(props);
        this.state = {img: ''};
        this.props.player === 1? this.setState({img: <img src="../Sprites/pawns/Wtower"/>}) : this.setState({img: <img src="../Sprites/pawns/Btower"/>});
    }

    checkMove(currentLocation, destination){
        let mod = currentLocation % 8;
        let diff = 8 - mod;

        return(
            Math.abs(currentLocation - destination)%8===0 || (destination >= (currentLocation - mod) && destination < (currentLocation + diff))
        );
    }

    pathfinding(currentLocation, destination){
        let path = [], start, end, increment;

        if(currentLocation>destination){
            start=destination;
            end=currentLocation;
        }else{
            start=currentLocation;
            end=destination;
        }

        if(Math.abs(currentLocation-destination)%8===0){
            increment = 8;
            start += 8;
        }else{
            increment = 1;
            start += 1;
        }

        for(let i = start; i < end; i+=increment){
            path.push(i);
        }

        return path;
    }
}

export class Pawn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {img: ''};
        this.props.player === 1? this.setState({img: <img src="../Sprites/pawns/Wpawn"/>}) : this.setState({img: <img src="../Sprites/pawns/Bpawn"/>});

        this.initPos = {
            1: [48,49,50,51,52,53,54,55],
            2: [8,9,10,11,12,13,14,15]
        }
    }

    checkMove(currentLocation, destination, occupied){
        if(this.props.player === 1){
            if((destination === currentLocation - 8 && !occupied) || (destination === currentLocation - 16 && this.initPos[1].indexOf(currentLocation) !== -1)) return true;
            else if(occupied && (destination === currentLocation - 9 || destination === currentLocation - 7)) return true;
        } else if(this.props.player === 2){
            if((destination === currentLocation + 8 && !occupied) || (destination === currentLocation + 16 && this.initPos[2].indexOf(currentLocation) !== -1)) return true;
            else if(occupied && (destination === currentLocation + 9 || destination === currentLocation + 7)) return true;
        }return false;
    }

    pathfinding(currentLocation, destination){
        if(destination===currentLocation-16){
            return [currentLocation-8];
        }else if(destination===currentLocation+16){
            return [currentLocation+8];
        }return [];
    }
}