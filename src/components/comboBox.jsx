import React from "react";
import options from "../data/options";
import Principal from "./principal"

function FillComboBox(){
    return (
        <>
        
            {options.map(option => (
                <Principal 
                    key ={option.name_op}
                    value_cb={option.name_op}
                />
            ))}
            
        </>
    )
}

export default FillComboBox;