import React, {useState} from "react"
import { getItemsByConditionType } from "../functions";

const Filter = () => {
    const existType = async (typeV) => {
        const result = await getItemsByConditionType(typeV)
        if (result.empty){
            return (
                <div>
                    <p>No existe la categoria {typeV}</p>
                </div>
            )
        } else {
            var idVoto = "";
            var nV = "";
            result.docs && result.docs.map(e => idVoto = e.id)
            result.docs && result.docs.map(e => nV = e.data().nVoto)
            updateItem(idVoto, {nVoto: nV += 1}, typeVoto)
        }
    }
}