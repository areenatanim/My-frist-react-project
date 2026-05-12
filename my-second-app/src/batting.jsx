import { useState } from "react"

export default function Batting() {
    const countStyle = {
        border: '2px solid pink',
        padding: "20px",
        borderRadius: '8px',
        margin: "50px"
    }
    const [run, setRun] = useState(0);
    const [six, setSix] = useState(0);
    const handelSix = () => {
        setRun(run + 6);
        setSix(six + 1);
    }

    return (
        <div style={countStyle}>
            <h2>Bangladesh : Batsman Run Count </h2>
            <p>Total six :{six} </p>
            <h3>Runs:{run} </h3>
            <button onClick={() => setRun(run + 1)}>Single </button>
            <button onClick={() => setRun(run + 4)}>Four</button>
            <button onClick={handelSix}>Six</button>
        </div>
    )
}