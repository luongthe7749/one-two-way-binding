import { useEffect, memo, useState, useRef, useMemo } from "react"
function TodoList(){
    const [work, setWork]= useState("")
    let data = JSON.parse(localStorage.getItem("works"))
    const [works, setWorks] = useState(data)
    const [price, setPrice] = useState()
    const [image, setImage] = useState()
    // const [total, setTotal] = useState(0)
    const inputAdd = useRef()
    const inputPrice = useRef()
    // localStorage.getItem("works")
    // const workk = [JSON.stringify(works)]
    // data.map(dataa =>(

    //     console.log(dataa.price)
    // ))
    useMemo(()=>{
            // local storage chi cho luu key vs values duoi dang string, kieu arr va obj can su dung cau lenh json.stringify
        localStorage.setItem("works",JSON.stringify(works));
        console.log(works)
    },[works])

    function handleAdd(){
        
        setWorks(prev => {
           return [...prev, { work: work, price: +price}]
        })
        setPrice("")
        setWork("")
         inputAdd.current.focus()   
         
    }
    // cleanup
    useEffect(()=>{
        return()=>
        image && URL.revokeObjectURL(image.preview)
    },[image])

    function handleImage(e){
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImage(file)
    }
    // const total = works.reduce((result, prod)=>
    //      result + prod.price,0)
    let total =0
     works.map(work =>(
        total += work.price
    ))

    return(
        <div style={{marginTop:"20px"}}>
            <h3>total:  {total} vnd</h3>
    <input ref={inputAdd} value={work} onChange={e=>{
        setWork(e.target.value)
    }} placeholder="nhap viec can lam"></input>
    <input ref={inputPrice} value={price} onChange={e=>{
        setPrice(e.target.value)
    }} placeholder="nhap gia tien"></input>
    <button onClick={handleAdd}>Add</button>
    <ul>
        {works.map((workkk, index)=>(
        <li key={index}>
            {workkk.work} -----price:  {workkk.price}  vnd
            
            <button onClick={()=>{
                const arr1 = works.slice(0,index)
                const arr2 = works.slice(index +1, works.length)
                const newArr = arr1.concat(arr2)
                setWorks(newArr)
            } } style={{marginLeft:"20px"}}>delete</button>
        </li>
        ))}
    </ul>
    <input type={"file"} onChange={e =>handleImage(e)} ></input>
    <img src={image && image.preview} width="30%"></img>
        </div>
    )
}
export default memo(TodoList)