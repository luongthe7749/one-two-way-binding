import { useEffect, useRef, useState } from "react"
function Others(){
    const [number, setNumber] = useState(180)

    const myInterval = useRef()
    function upp(){
        myInterval.current= setInterval(()=>{
            setNumber(prev => prev-1)
            console.log("ok")
        },1000)
    }
    function downn(){
        clearInterval(myInterval.current)
    }
    return(
        <>
        <h1>{number}</h1>
        <button onClick={upp}>START</button>
        <button onClick={downn}>STOP</button>

        </>
    )
}
export default Others