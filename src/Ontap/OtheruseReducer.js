import { useEffect, useReducer, useState } from "react"
//initial
const initNum = 0
// actions
const UP = "up"
const DOWN = "down"
// useReducer
function reducer(state,action){
    switch(action){
        case UP:
            return state +1
        case DOWN:
            return state -1
    default :
        throw new Error("Invalid action")
    }
}

function OtheruseReducer(){
    const [count, dispatch] = useReducer(reducer,initNum)

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch(UP)}}>UP</button>
        <button onClick={()=>{dispatch(DOWN)}}>DOWN</button>
        
        </>
        
    )
}
export default OtheruseReducer