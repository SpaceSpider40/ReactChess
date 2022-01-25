import React from "react";
const row = require("../Dictionaries/row.json");
const col = require("../Dictionaries/col.json");
const diagonalTLBR = require("../Dictionaries/diagonalTLBR.json");
const diagonalTRBL = require("../Dictionaries/diagonalTRBL.json");

const rowCheck = (currentLocation, destination) => {
    return !!(row[currentLocation]&&row[currentLocation][destination]);
}

const colCheck = (currentLocation, destination) => {
    return !!(col[currentLocation]&&col[currentLocation][destination]);
}

const diagonalCheck = (currentLocation, destination) => {
    return !!((diagonalTLBR[currentLocation]&&diagonalTLBR[currentLocation][destination])||(diagonalTRBL[currentLocation]&&diagonalTRBL[currentLocation][destination]));
}

export const cleanPath = (pathfinding, fields)=>pathfinding.reduce((acc,curr)=>!fields[curr]&&acc,true);

export class King extends React.Component{
    constructor(player, style) {
        super(player)
        
        this.style = style;
        this.player = player;
    }

    getPlayer() {
        return this.player
    }

    checkMove(currentLocation, destination){
        return(
            (currentLocation - 9 === destination && diagonalCheck(currentLocation, destination)) ||
            currentLocation - 8 === destination ||
            (currentLocation - 7 === destination && diagonalCheck(currentLocation, destination)) ||
            (currentLocation - 1 === destination && rowCheck(currentLocation,destination)) ||
            (currentLocation + 1 === destination && rowCheck(currentLocation,destination)) ||
            (currentLocation + 7 === destination && diagonalCheck(currentLocation, destination)) ||
            currentLocation + 8 === destination ||
            (currentLocation + 9 === destination && diagonalCheck(currentLocation, destination))
        );
    }

    pathfinding(currentLocation, destination){
        return [];
    }

    render(){
        return null
    }
}

export class Queen extends React.Component{
    constructor(player, style) {
        super(player)
        
        this.style = style;
        this.player = player;
    }

    getPlayer() {
        return this.player
    }

    checkMove(currentLocation, destination){
        return(         
            (diagonalCheck(currentLocation,destination)||rowCheck(currentLocation, destination)||colCheck(currentLocation,destination))
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
        }else if(Math.abs(currentLocation-destination)%9===0){
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

    render(){
        return null
    }
}

export class Bishop extends React.Component{
    constructor(player, style) {
        super(player)
        
        this.style = style;
        this.player = player;
    }

    getPlayer() {
        return this.player
    }

    checkMove(currentLocation, destination){
        return diagonalCheck(currentLocation,destination);
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

    render(){
        return null
    }
}

export class Knight extends React.Component{
    constructor(player, style) {
        super(player)
        
        this.style = style;
        this.player = player;
    }

    getPlayer() {
        return this.player
    }

    checkMove(currentLocation, destination){
        return(
            ((currentLocation - 17 === destination && !rowCheck(currentLocation,destination))&& !colCheck(currentLocation,destination))||
            ((currentLocation - 15 === destination && !rowCheck(currentLocation,destination))&& !colCheck(currentLocation,destination))||
            ((currentLocation - 10 === destination && rowCheck(currentLocation,destination))&& !colCheck(currentLocation,destination))||
            ((currentLocation + 6 === destination && !rowCheck(currentLocation,destination))&& !colCheck(currentLocation,destination))||
            ((currentLocation + 15 === destination && !rowCheck(currentLocation,destination))&& !colCheck(currentLocation,destination))||
            ((currentLocation - 6 === destination && !rowCheck(currentLocation,destination))&& !colCheck(currentLocation,destination))||
            ((currentLocation + 10 === destination && rowCheck(currentLocation,destination))&& !colCheck(currentLocation,destination))||
            ((currentLocation + 17 === destination && !rowCheck(currentLocation,destination))&& !colCheck(currentLocation,destination))
        )
    }

    pathfinding(currentLocation, destination){
        return [];
    }

    render(){
        return null
    }
}

export class Tower extends React.Component{
        constructor(player, style) {
            super(player)
            
            this.style = style;
            this.player = player;
    }

    getPlayer() {
        return this.player
    }

    checkMove(currentLocation, destination){
        return(
           (colCheck(currentLocation, destination)||rowCheck(currentLocation,destination))
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

    render(){
        return null
    }
}

export class Pawn extends React.Component{
    constructor(player, style) {
        super(player)
        
        this.style = style;
        this.player = player;

        this.initPos = {
            1: [48,49,50,51,52,53,54,55],
            2: [8,9,10,11,12,13,14,15]
        }
    }

    getPlayer() {
        return this.player
    }

    checkMove(currentLocation, destination, occupied){
        if(this.player === 1){
            if((destination === currentLocation - 8 && !occupied) || (destination === currentLocation - 16 && this.initPos[1].indexOf(currentLocation) !== -1)) return true;
            else if(occupied && diagonalCheck(currentLocation,destination) && (destination === currentLocation - 9 || destination === currentLocation - 7)) return true;
        } else if(this.player === 2){
            if((destination === currentLocation + 8 && !occupied) || (destination === currentLocation + 16 && this.initPos[2].indexOf(currentLocation) !== -1)) return true;
            else if(occupied && diagonalCheck(currentLocation,destination) && (destination === currentLocation + 9 || destination === currentLocation + 7)) return true;
        }return false;
    }

    pathfinding(currentLocation, destination){
        if(destination===currentLocation-16){
            return [currentLocation-8];
        }else if(destination===currentLocation+16){
            return [currentLocation+8];
        }return [];
    }

    render(){
        return null
    }
}

export class Empty extends React.Component{
    constructor(player) {
        super(player);

        this.player = player;
    }

    checkMove(){return true}
    pathfinding(){return []}

    render(){
        return null
    }
}