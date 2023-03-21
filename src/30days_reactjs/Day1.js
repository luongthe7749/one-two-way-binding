import { useEffect,useRef,useState } from "react";

function Day1(){
    return(
        // ,position:"absolute",transform:"translateX(6%)",position:"relative"
        //<i class="fa-solid fa-cart-shopping"></i>
        <div style={{height:"100vh",backgroundImage:"linear-gradient(to right, #4daf54, #3d8880",display:"flex"}}>
            <div style={{height:"360px", width:"280px",backgroundColor:"#272d40",margin:"auto",borderRadius:"5%"}}>
            <i class="fa-regular fa-heart" style={{color:"#fff", margin:"15px 20px", fontSize:"22px"}}></i>
            <i class="fa-solid fa-cart-shopping" style={{color:"#fff",margin:"15px 20px", fontSize:"22px",float:"right"}}></i>
            <div style={{height:"154px",width:"252px",backgroundColor:"#fff",margin:"0 auto"}}>
            <img src="https://www.nodemy.vn/projects/html-css-js/product-card/Nike%20Zoom%20KD%2012.png" ></img>
            </div>
              
            </div>
        </div>
    )
}
export default Day1