import { useEffect, useState } from "react"

    const mang =[{id:1, name: "lesson 1"},{id:2, name: "lesson 2"},{id:3, name: "lesson 3"},{id:4, name: "lesson 4"}]
function GetCmt(){
    const [lessonId, setLessonId] = useState(1)

    useEffect(()=>{
        const handleComment = ({detail})=>{
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return()=>{
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    },[lessonId])
    return(
       <>
       <ul>
    {    mang.map((mangcon,index) =>(
            <li key={index} style={lessonId == mangcon.id ? {fontWeight:"bold", color:"red"}:{fontWeight:"bold"}}
                onClick={()=>{
                    setLessonId(mangcon.id)
                }}

            >
                {mangcon.name}
            </li>
            ))}
       </ul>
       </>
    )
}
export default GetCmt