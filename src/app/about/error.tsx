"use client"
import {useEffect} from "react"
export default function ErrorPage ({error ,reset}: {error : Error & {digest? : string}; reset : ()=> void}){
    useEffect (()=> {
        console.log(error)
    },[])
    return (
         <div>
             <h1>Something went wrong . please go back to homepage or try again </h1>
             <button onClick={()=> reset()}>Retry</button>
         </div>
    )
}