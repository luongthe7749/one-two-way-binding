import { memo } from "react";

function Content({number}){
    console.log("content-render")
    return(
        <h1>Hello World {number}</h1>
    )
}
export default memo(Content)