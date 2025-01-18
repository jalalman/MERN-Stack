import './Com.css'
import React,{useState} from 'react'
function Com(props) {

    const {firstname,lastname,age,hairColor}=props
    const [incAge,setIncAge]=useState(Number(age));

    function handleincAge(){
        setIncAge(incAge+1)
        console.log(incAge)
    }
    return(
        <>
            <div className="com">
                <h1>name : {firstname} {lastname}</h1>
                <h2>age : {incAge}</h2>
                <h3>hair color : {hairColor}</h3>
                <button onClick={handleincAge}>Birthday for {firstname} {lastname}</button>
            </div>
        </>
    )
}

export default Com ;