import React from "react";
import Field from "./Field";

export default class KnockedoutBlock extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            redKnockedoutPieces: [],
            blueKnockedoutPieces: []
        }
    }
    createField(field, spot, colour){
        return <Field piece={field} style={field.style}/>
    }
    
    componentWillReceiveProps(props){
        this.state.redKnockedoutPieces.push(props.redKnockedoutPieces);
        this.state.blueKnockedoutPieces.push(props.blueKnockedoutPieces);
    }
    
    render(){
        console.log(this.state.redKnockedoutPieces);
        console.log(this.state.blueKnockedoutPieces);
        return(
            <div>
                <div>{this.state.redKnockedoutPieces.map((rs,index)=>this.createField(rs,index))}</div>
                <div>{this.state.blueKnockedoutPieces.map((bs,index)=>this.createField(bs,index))}</div>
            </div>
        )
    }
}