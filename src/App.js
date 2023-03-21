import logo from './logo.svg';
import './App.css';
import {useReducer, useState,useEffect, useLayoutEffect, useRef, useMemo} from "react"
import Content from "./Content";
import Menu from './Ontap/Menu';
import Others from './Ontap/Others';
import OtheruseReducer from './Ontap/OtheruseReducer';
import TodoList from './Ontap/TodoList';
import GetCmt from './Ontap/GetCmt';
import {Routes, Route,Link} from 'react-router-dom'

import Menu2 from './Ontap2/Menu2';
import Others2 from './Ontap2/Others2';
import OtheruseReducer2 from './Ontap2/OtheruseReducer2';
import TodoList2 from './Ontap2/Todolist2';
import GetCmt2 from './Ontap2/GetCmt2';
import Day1 from './30days_reactjs/Day1'
import Day3 from './30days_reactjs/Day3'
import Day2 from './30days_reactjs/Day2'
 

// const initState = 0
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// //reducer
// const reducer = (state,action) => {
// console.log('reducer running...')
// switch(action){
//   case UP_ACTION:
//     return state +1
//     case DOWN_ACTION:
//       return state -2
//       default :
//       throw new Error('invalid action')
// }
// } 

function App() {
  const [user, setUser] = useState({
    name: 'the' , age:24 , adress: 'thanhhoa'
  })

  // const [count,dispatch] = useReducer(reducer,initState)
  return (
<>
{/* <div style={{padding:'0px 32px'}}>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(DOWN_ACTION) }} >Down</button>
      <button onClick={()=>{
        dispatch(UP_ACTION) }} >UP</button>
</div> */}

<h1>{JSON.stringify(user)}</h1>
<button onClick={()=>{
  setUser({...user, bio:'yeu mau hong'})
}} >click me</button>

<div className='baoLogo' >
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Learn React
        </a>
      </header>
    </div>
</>
  
  );
}

const gifts = ['ab1', 'ab2','ab3']
function PhanThuong(){
  const [number, setNumber] = useState()
  return(
<div>
        <h1>{number ? number : 'chua co phan thuong'}</h1>
        <button onClick={()=>{
          const ranD = Math.floor(Math.random()*gifts.length) 
          setNumber(gifts[ranD])
          console.log(ranD)
        }} >lay thuong</button>
      </div>
  )
      

}

function TwowayBinding(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
function handleSubmit(){
  const mang = [name,email]
  console.log(mang)
}
return(
  <div>
    <h1>ok</h1>
    <input  value={name} placeholder='name' onChange={e=>{setName(e.target.value)}} ></input>
    <input value={email} placeholder='email' onChange={e=>{setEmail(e.target.value)}} ></input>
    <button onClick={handleSubmit}>register</button>
  </div>
)

}


const mang = [{
id:1,name:'a'
},
{
  id:2,name:'b'
},
{
  id:3,name:'c'
}]

function Inputradio(){
    const [name, setName] = useState()
   console.log(name)
   // call api
   function handleSubmit(){
    console.log({id:{name}})
   }
  return(
    <div>
      {mang.map(mangcon =>(
        <div key={mangcon.id}>
          <input onChange={()=>setName(mangcon.name)} checked={name === mangcon.name}  type={'radio'} ></input>
          {mangcon.name} 
        </div>
      ))}
      <button onClick={handleSubmit} >submit</button>
    </div>
  )
}

function Inputcheckbox(){

  const [checked,setChecked] = useState([])
  function handleCheck(id){
    setChecked(prev =>{
      const ischecked = checked.includes(id)
      if(ischecked){
        return checked.filter(item => item != id)
      }else{
       return [...prev, id] 
      }
    })
  }
  function handleSubmit(){
    console.log({ids:checked})
  }
  return(
    <div>
      {mang.map(mangcon => (
        <div key={mangcon.id}>
          <input onChange={()=>handleCheck(mangcon.id)} checked={checked.includes(mangcon.id)} type={'checkbox'}  ></input>
          {mangcon.name}
        </div>
      ))}
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

function Inputcheckboxx(){
      const [checked, setChecked] = useState([])

      function handleChecked(id){
        setChecked(prev=>{
          const isChecked = checked.includes(id)
          if(isChecked){
           return checked.filter(item => item != id)
          }else{
           return [...prev, id]
          }
      })
      }
      function handleSubmit(){
        console.log({ids: checked})
      }
  return(
    <div>
     {mang.map(mangcon => (
      <div key={mangcon.id}>
        <input onChange={()=>handleChecked(mangcon.id)} checked={checked.includes(mangcon.id)} type={'checkbox'} ></input>
        {mangcon.name}
      </div>
     ))}
     <button onClick={handleSubmit} >submit</button>
    </div>
  )
}


function Inputcheckboxxx(){
    const [checked, setChecked] = useState([])

  function handleCheck(id){
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked){
       return checked.filter(item => item != id)
      }else{
        return [...prev, id]
      }
    })
  }
  function handleSubmit(){
    console.log({ids: checked})
  }
  return(
    <div>
      {mang.map(mangcon => (
        <div key={mangcon.id}>
            <input onChange={()=>handleCheck(mangcon.id)} checked={checked.includes(mangcon.id)} type={'checkbox'} ></input>
            {mangcon.name}
        </div>
      ))}
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}



function Inputcheckboxxxx(){
    const [checked, setChecked] = useState([])
    function handleChecked(id){
      setChecked(prev =>{
        const isChecked = checked.includes(id)
        if(isChecked){
         return checked.filter(item => item != id)
        }else{
          return [...prev, id]
        }
      })
    }
    function handleSubmit(){
        console.log({ids: checked})
    }
  
  return (
    <div>
      {mang.map(mangcon => (
        <div key={mangcon.id}>
          <input onChange={()=>handleChecked(mangcon.id)} checked={checked.includes(mangcon.id)} type={'checkbox'}></input>
          {mangcon.name}
        </div>
      ))}
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

function Todolist(){
  const [job, setJob] = useState('')
  const [listJob, setListJob] = useState([localStorage.getItem("job")])

  //  listJob = [localStorage.getItem("job")]
    console.log(listJob)

  function handleAdd(){
    setListJob(prev => {
      localStorage.setItem("job",[...prev,job]);  
      return [...prev,job]
    })
    setJob('')
  }
  
  return(
    <div>
      <input onChange={e=>{setJob(e.target.value)}} placeholder='viec can lam'></input>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {listJob.map((listCon,index) =>(
        <li key={index}>
            {listCon}
        </li>
        ))}
      </ul>
    </div>
    
  )
}

function Getdata(){
  const [state, setState]= useState("posts")
  const [posts, setPosts] = useState([])
  const [scrool, setScrool] = useState([])
  const [scroolState,setScroolState] = useState(false)
  const [timer, setTimer] = useState(180)

  console.log(scrool)
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${state}`).then(res => res.json()).then(postt => setPosts(postt))
  },[state])

  useEffect(()=>{
    const timerId = setInterval(()=>{
        setTimer(prev => prev-1)
    },1000)

    clearInterval(timerId)
  },[])

  useEffect(()=>{
    function scroolHandleEvent(){
      setScrool(window.scrollY)
      if(window.scrollY >= 500){
        setScroolState(true)
      }else{
        setScroolState(false)
      }
      return setScroolState
    }
    window.addEventListener('scroll',scroolHandleEvent)
    return()=>{
      window.removeEventListener('scroll',scroolHandleEvent)
      console.log("unmounting")
    }
  },[])

  

  return(
    <div>
      <button onClick={()=>{setState("posts")}} style={state === "posts" ? {backgroundColor:'#333', color:'#fff'}:{}} >Post</button>
      <button onClick={()=>{setState("albums")}} style={state === "albums" ? {backgroundColor:'#333', color:'#fff'}:{}}>Album</button>
      <button onClick={()=>{setState("comments")}} style={state === "comments" ? {backgroundColor:'#333', color:'#fff'}:{}}>Comment</button>
      <button  style={ scroolState == true ? {backgroundColor:"#333",color:"#fff", position:"fixed", right:"20px",bottom:"50px"}:{display:"none"}} >go to top</button>
    <h2>{timer}</h2>
      <ul>
        {posts.map(post =>(
        <li key={post.id}>
          {post.title|| post.name}
        </li>
        ))}
      </ul>
    </div>
  )
}


function Getimage(){
  const [image, setImage] = useState()

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

  return(
    <div>
      <input type={"file"} onChange={handleImage} ></input>
      {image && (<img src={image.preview} alt='' width="80%" ></img>)}
    </div>
  )
}

  const mang2 = [{id:1,name:"ten so 1"},{id:2,name:"ten so 2"},{id:3,name:"ten so 3"},{id:4,name:"ten so 4"},{id:5,name:"ten so 5"}]
  
  
  function BaiTap1(){
    const [name,setName]= useState('Apple')
    function handleFruit(e){
      console.log(e.target.value)
      setName(e.target.value)
    }

  return(
    <div>
      <h2>
        Pick a fruit:
        <select onChange={(e)=>{handleFruit(e)}} name="selectedFruit" style={{marginLeft:'10px'}}>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </h2>
      <h1>{name}</h1>
    </div>
  )
}


const mang3 = [{id:1,name:'bai hoc 1'},{id:2,name:'bai hoc 2'},{id:3,name:'bai hoc 3'}]
function GetComment(){
  const [lessonId, setlessonId] = useState(1)

  useEffect(()=>{
    const handleComment = ({detail}) =>{
      console.log(detail) 
    }
    window.addEventListener(`lesson-${lessonId}`,handleComment)
    return()=>{
      window.removeEventListener(`lesson-${lessonId}`,handleComment)
    }
  },[lessonId])
  
  return(
    <div>
      <ul>
        {mang3.map(mangcon =>(
          <li key={mangcon.id} onClick={()=>{
            setlessonId(mangcon.id)
          }} style={lessonId === mangcon.id? {color:"#fff", backgroundColor:"#333"}:{}}>
            {mangcon.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

function OntapUseLayoutEffect(){
  const [number, setNumber]= useState(0)

  useLayoutEffect(()=>{
    if(number >3){
      setNumber(0)
    }
  },[number])

  function handleNumber(){
    setNumber(number +1)
    
  }
  return(
    <div>
      <h1>{number}</h1>
      <button onClick={handleNumber}>add</button>
    </div>
  )
}

function OntapUseref(){
  const [number,setNumber]= useState(60)

    const prevNumber = useRef()
    const numberId = useRef()

    console.log(number, prevNumber.current)

    useEffect(()=>{
      prevNumber.current = number
    },[number])

  function handleStart(){
     numberId.current = setInterval(()=>{
        setNumber(prev => prev -1)
      },1000)
      console.log('start',numberId)
  }
  function handleStop(){
      clearInterval(numberId.current)
      console.log('stop',numberId)
  }
  return(
    <div>
    <h1>{number}</h1>
    <button onClick={handleStart}>start</button> 
    <button onClick={handleStop}>stop</button> 
    </div>
    
  )
}


function OntapMemo(){
  const [number, setNumber] = useState(0)
  const [number2, setNumber2] = useState(0)
  function up(){
    setNumber(prev => prev +1)
  }
  function down(){
    setNumber(prev => prev -1)
  }
  function up2(){
    setNumber2(prev => prev +1)
  }
  function down2(){
    setNumber2(prev => prev -1)
  }
  return(
    <div>
<Content number ={number}/>
<h1>{number}</h1>
<h1>{number2}</h1>
<button onClick={up}>up1</button>
<button onClick={down}>down1</button>

<button onClick={up2}>up2</button>
<button onClick={down2}>down2</button>
</div>

  )
}

function OntapUseMemo(){
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [list, setList] = useState([])
  
  console.log(list)
  function handleSubmit(){
    setList(prev =>[...prev, {name,price: +price}])
  }

  const total = useMemo(()=>{
    const result = list.reduce((result, product)=>{
      console.log('tinh toan lai....')
      return result + product.price
    },0)
    return result
  },[list])

  return(
    <>
    <input onChange={e =>{setName(e.target.value)}} placeholder='Enter Name' ></input>
    <input onChange={e=>{setPrice(e.target.value)}} placeholder='Enter Price'></input>
    <button onClick={handleSubmit}>Submit</button>
    <h1>Price:   {total}</h1>
    <ul>
      {list.map((listcon,index) =>(
      <li key={index} >{listcon.name}  -  {listcon.price}</li>
      ))}
    </ul>
    </>
  )
}


// useReducer

// khai bao initState
const initState = 0
// khai bao action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// tao reducer
function reducer(state,actions){
  console.log('reducer running...')
  switch(actions){
    case UP_ACTION : 
    return state +1
    case DOWN_ACTION:
      return state -1
    default: 
    throw new Error('Invaid Action')
  }
}

function OntapUsereducer(){
  const [count, dispatch] = useReducer(reducer,initState)

  return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>{dispatch(UP_ACTION)}}>UP</button>
    <button onClick={()=>{dispatch(DOWN_ACTION)}}>DOWN</button>

    </>
  )
}

//init state:
  const initState2 = {
    job : '',
    jobs : []
  }
//Actions:
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

function setJob (payload){
  return{
    type : SET_JOB,
    payload
  }
}
function addJob(payload){
return{
  type: ADD_JOB,
  payload
}
}
function deleteJob(payload){
  return{
    type: DELETE_JOB,
    payload
  }
}
// console.log(setJob('rua bat'))
// Reducer
function reducer2(state, action){
  // console.log(action)
switch(action.type){
  case SET_JOB:
    return{
      ...state,
      job: action.payload
    }
    case ADD_JOB:
      return{
        ...state,
        jobs: [...state.jobs,action.payload]
      }
      case DELETE_JOB:
        const newJobs = [...state.jobs]
        newJobs.splice(action.payload,1)
        return{
            ...state,
            jobs : newJobs
        }
    default:
    throw new Error('Invalid Action')
}
return state
  
}

function OntapUsereducerToDoList(){
  const [value, dispatch] = useReducer(reducer2, initState2)
  // console.log(value)
  const {job , jobs} = value
  const listRef = useRef()
  listRef.current && listRef.current.focus()
return(
    <>
  <input ref={listRef} value={job} onChange={e => dispatch(setJob(e.target.value))} placeholder='nhap viec can lam'></input>
  <button onClick={()=>{
    dispatch(addJob(job)); dispatch(setJob(''))
  }}>Add</button>
  <ul>
    {jobs.map((job,index) =>(
      <li key={index}>
        {job}
      <button onClick={()=>{
        dispatch(deleteJob(index))
        // console.log(jobs[index])
      }} style={{marginLeft:'20px'}}>delete</button>
      </li>
    ))}
    
  </ul>
    </>
  )
}

  const mangColor = ['deeppink','green','yellow','black','blue']
function BaiTap2(){
    const [color, setColor] = useState([localStorage.getItem("color")])

    localStorage.setItem("color",color);
    function handleClick(){
      setColor(mangColor[(Math.floor(Math.random()*4))])
    }
  return (
    <>
    <div className='thediv'onClick={handleClick} style={{backgroundColor:color}}>
    </div>
    </>
  )
}



// initState
const initState3 = {
    job: '',
    jobs: []
}
// action
const SET_JOB2 = 'set_job'
const ADD_JOB2 = 'add_job'
const DELETE_JOB2 = 'delete_job'

function setJob2(payload){
  return{
    type: SET_JOB2,
    payload
  }
}
function addJob2(payload){
  return{
    type: ADD_JOB2,
    payload
  }
}
function deleteJob2(payload){
  return{
    type: DELETE_JOB2,
    payload
  }
}
// reducer
function reducer3(state, action){
  switch(action.type){
    case SET_JOB2:
      return{
        ...state,
        job: action.payload
      }
      case ADD_JOB2:
        return{
          ...state,
          jobs: [...state.jobs,action.payload]
        }
      case DELETE_JOB2:
        const newJobs2 = [...state.jobs]
        newJobs2.splice(action.payload,1)
        return{
          ...state,
          jobs:newJobs2
        }
      default :
      throw new Error("nvalid Action")
  }
  return state

}
function OntapUsereducerToDoList2(){
    const [value,dispatch] = useReducer(reducer3,initState3)
    // console.log(value)
   const {job, jobs} = value
   const inputRef = useRef()
   inputRef.current && inputRef.current.focus()
  return(
    <>
    <input ref={inputRef} value={job} onChange={e=>{
      dispatch(setJob2(e.target.value))
    }} placeholder='nhap cong viec' ></input>
    <button onClick={()=>{
      dispatch(addJob2(job));
      dispatch(setJob(''))
    }}>add</button>
    <ul>
      {jobs.map((job,index) =>(
        <li key={index}>
          {job}
        <button onClick={()=>{
          dispatch(deleteJob2(index))
        }}>delete</button>
      </li>
      ))}
    </ul>
    </>
  )
}

//initState
const initState4={
  job: '',
  jobs:[]
}
// actions:
const SET_JOB3 = 'set_job'
const ADD_JOB3 = 'add_job'
const DELETE_JOB3 = 'delete_job'

function setJob3(payload){
  return{
    type: SET_JOB3,
    payload
  }
}
function addJob3(payload){
  return{
    type: ADD_JOB3,
    payload
  }
}
function deleteJob3(payload){
  return{
    type: DELETE_JOB3,
    payload
  }
}
// reducer
function reducer4(state, action){
  // console.log(action)
  switch(action.type){
    case SET_JOB3:
      return{
        ...state,
        job: action.payload
      }
    case ADD_JOB3:
      return{
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      case DELETE_JOB3:
        const newJob3 = [...state.jobs]
        newJob3.splice(action.payload,1)
        return{
          ...state,
          jobs : newJob3
        }
  }

  return state
}

function OntapUsereducerToDoList3(){
  const [value, dispatch] = useReducer(reducer4, initState4)
  const {job, jobs} = value
  const inputRef = useRef()
  inputRef.current && inputRef.current.focus()

  return(
    <>
    <input ref={inputRef} value={job} onChange={e=>{
        dispatch(setJob3(e.target.value))
    }}  placeholder={'nhap viec can lam'}  ></input>

    <button onClick={()=>{
      dispatch(addJob3(job));
      dispatch(setJob3(''))
    }}>add</button>
    <ul>
      {jobs.map((job,index) =>(
      <li key={index}>
        {job}
        <button onClick={()=>{
          dispatch(deleteJob3(index))
        }}>delete</button>
      </li>
      ))}
    </ul>
    </>
  )
}

const mangontap = ["Menu","TodoList","OtheruseReducer","Others","GetCmt"]
function Ontaptonghop(){
  const [state, setState] = useState("TodoList")
  const [time, setTime] = useState(180)

  useEffect(()=>{
    
     const myInterval =  setInterval(()=>{
        setTime(prev => prev -1)
      },1000)
    if(time < 0){
      setTime(180)
    }
    return()=>
      clearInterval(myInterval)
    
  })
  // console.log(state)
  return(
    <>
    {mangontap.map((ontap,index)=>(
   <button onClick={()=>{
    setState(ontap)
   }} style={ontap == state ? {backgroundColor:"#333", color:"#fff"}:{} } key={index}>{ontap}</button>
    ))}
    <h3 style={{position:"fixed",right:"100px"}}>Time:  {time}</h3>
    {state == "Menu" ? <Menu/> 
    :(state == "TodoList") ? <TodoList/>
    :(state == "OtheruseReducer") ? <OtheruseReducer/>
    :(state == "Others") ? <Others/>
    :(state == "GetCmt") ? <GetCmt/>
    :null}
    </>
  )
}

const mangontap2 = ["Menu2","TodoList2","OtheruseReducer2","Others2","GetCmt2"]

function Ontaptonghop2 (){
  return(
    <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/" >Menu2</Link>
            </li>
            <li>
              <Link to="/other2" >Others2</Link>
            </li>
            <li>
              <Link to="/getCmt2" >GetCmt2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Menu2/>}/>
          <Route path='/other2' element={<Others2/>}/>
          <Route path='/getCmt2' element={<GetCmt2/>}/>
        </Routes>
    </div>
  )
}


const mang30days = ["Day1","Day2","Day3"]
function Ontap30days(){
  const [statebtn, setStateBtn] = useState()
  console.log(statebtn)
  function handleClick(e){
    // console.log(e.target.__reactProps$g2pfz3gvoz.children)
    setStateBtn(mang30days[e])
  }
return(
 
    <>
    <div >
    <ul>
    {mang30days.map((mangcon, index)=>(
      <li key={index}>
    <button onClick={()=>{setStateBtn(mang30days[index])}}>{mangcon}</button>
      </li>
    ))}
    </ul>
    </div>
    {statebtn == "Day1" ? <Day1/>:(statebtn == "Day2")? <Day2/>:(statebtn == "Day3")?<Day3/>:null}

    </>
)
}

  export default Ontaptonghop2
// export default Ontaptonghop
// export default Ontap30days
// export default BaiTap2
// export default OntapUsereducerToDoList
// export default OntapUsereducerToDoList3
// export default OntapUsereducerToDoList2
// export default OntapUsereducer
//  export default OntapUseMemo
// export default OntapUseLayoutEffect
// export default OntapUseref
// export default OntapMemo
// export default GetComment
// export default Getimage 
// export default Getdata 
// export default Todolist
// export default Inputcheckboxxxx
// export default Inputcheckboxxx
// export default Inputcheckboxx
// export default Inputcheckbox
// export default Inputradio
// export default TwowayBinding
// export default PhanThuong                                                                                                                                                                                           
// export default App;
// export default BaiTap1
