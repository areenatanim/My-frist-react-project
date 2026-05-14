import { useState } from "react"

export default function Bolling() {
    const countStyle = {
        border: '2px solid red',
        padding: "10px",
        borderRadius: '8px',
        margin: "50px"
    }
    const btnStyle = {
        width: '100px',
        margin: '10px auto',
        marginRight: '10px',
        height: '40px',
        borderRadius: '10px',
        border: '0',
        color: 'blueviolet',
        backgroundColor: 'aqua',
        fontSize: '18px'
    }
    const [boll, setBoll] = useState(0);
    const [run, setRun] = useState(0);
    const handelSingle = () => {
        setBoll(boll + 1);
        setRun(run + 1);

    }
    const handelFour = () => {
        setBoll(boll + 1);
        setRun(run + 4);
    }
    const handelSix = () => {
        setBoll(boll + 1);
        setRun(run + 6);
    }
    const handelDot = () => {
        setBoll(boll + 1);
        setRun(run + 0);
    }
    const handelWite = () => {
        setBoll(boll + 0);
        setRun(run + 1);
    }

    return (
        <div style={countStyle}>
            <h2>Bangladesh Bolling  </h2>
            <h3>Boll :{boll} </h3>
            <h3>Run : {run} </h3>
            <button style={btnStyle} onClick={handelSingle}>Single</button>
            <button style={btnStyle} onClick={handelFour} >Four</button>
            <button style={btnStyle} onClick={handelSix} >Six</button>
            <button style={btnStyle} onClick={handelDot}>Dot Boll</button>
            <button style={btnStyle} onClick={handelWite}>wite </button>
        </div>
    )
}