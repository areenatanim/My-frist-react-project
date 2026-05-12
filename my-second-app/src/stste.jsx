import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const countStyle = {
        border: '2px solid red',
        padding: "10px",
        borderRadius: '8px',
        margin: "50px"
    }
    const btnStyle = {
        width: '100px',
        margin: '10px auto',
        height: '40px',
        borderRadius: '10px',
        border: '0',
        color: 'blueviolet',
        backgroundColor: 'aqua',
        fontSize: '18px'
    }
    const handelAdd = () => {
        setCount(count + 1);

    }
    return (
        <div style={countStyle}  >
            <h3>count : {count}</h3>
            <button onClick={handelAdd} style={btnStyle}>Add </button>
        </div>
    )
}