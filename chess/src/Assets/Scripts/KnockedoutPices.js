import React from "react";
import Field from "./Field";

export default class KnockedoutBlock extends React.Component{
    createField(field, spot, colour){
        return <Field piece={field} style={field.style}/>
    }

    render(){
        return(
            <div>
                <div>{this.props.redKnockedoutPieces.map((rs,index)=>this.createField(rs,index))}</div>
                <div>{this.props.blueKnockedoutPieces.map((bs,index)=>this.createField(bs,index))}</div>
            </div>
        )
    }
}