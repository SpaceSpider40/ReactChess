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
    
    knocked(redKnockedoutPieces,blueKnockedoutPieces){
        this.state.redKnockedoutPieces.push(redKnockedoutPieces);
        this.state.blueKnockedoutPieces.push(blueKnockedoutPieces);
        return(<h5>zzzzzzz</h5>)
    }
    
    render(){
        return( 
            <div>
                <h1>Zbite</h1>
                <div>{this.state.redKnockedoutPieces.map((rs,index)=>this.createField(rs,index))}</div>
                <div>{this.state.blueKnockedoutPieces.map((bs,index)=>this.createField(bs,index))}</div>
            </div>
        )
    }
}