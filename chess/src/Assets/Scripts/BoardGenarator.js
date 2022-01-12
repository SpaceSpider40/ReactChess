import React from "react";
import Field from "./Field";

export default class Board extends React.Component {
    createField(spot, colour){
        return <Field piece = {this.props.fields[spot]} style = {this.props.fields[spot]?this.props.fields[spot].style:null} colour = {colour} onClick={()=>this.props.onClick(spot)}/>
    }

    render(){
        const board = [];

        for(var i = 0; i < 8; i++){
            const rows = [];
            for(var j = 0; j < 8 ; j++){
                const fieldColour = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))?"style.white":"style.black";
                rows.push(this.createField((i*8)+j, fieldColour));
            }
            board.push(<div className="BoardRow">{rows}</div>);
        }

        return(
            <div>
                {board}
            </div>
        );
    }
}

function isEven(num){
    return num % 2 === 0;
}