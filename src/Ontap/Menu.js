import { useState, useEffect, memo } from "react"

const mang = ["posts","albums","comments"]
function Menu(){
    const [state, setState] = useState("posts")
    const [list, setList] = useState([])
    const [scrool, setScrool] = useState(0)
    const [showBtn, setShowBtn] = useState(false)
    // console.log(showBtn)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
        .then(res => res.json())
        .then(result => 
            setList(result)
            )
    },[state])

    useEffect(()=>{
     function handleScrool(){
            // console.log(window.scrollY)
            setScrool(window.scrollY)
            if(scrool >= 500){
                setShowBtn(true)
            }else{
                setShowBtn(false)
            }
        }
        window.addEventListener("scroll", handleScrool)
         return(()=>{
          window.removeEventListener("scroll", handleScrool) 
         })
    })
     

    return(
        <div style={{marginTop:"30px"}}>
        {mang.map((mangcon,index) => (
            <button onClick={()=>{setState(mangcon)}} style={state == mangcon? {backgroundColor:"#333",color:"#fff"}:{}} key={index}>{mangcon}</button>
        ))}

        <ul>
        {list.map((listcon,index) =>(
            <li key={index}>
                    {listcon.title || listcon.name}
            </li>  
        ))}
        </ul>
         {showBtn == true ?<button onClick={()=>{
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
         }} style={{backgroundColor:"#333", color:"#fff", position:"fixed", bottom:"20px",right:"20px"}}>Go To Top</button>:null}


        </div>
    )
}
export default memo(Menu)