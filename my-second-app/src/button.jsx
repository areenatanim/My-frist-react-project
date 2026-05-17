import { useState } from "react"

export default function CountBtn() {
    const [count, setCount] = useState(0);
    const handelAdd = () => {
        const addNum = count + 1;
        return setCount(addNum);
    }
    const handelRemove = () => {
        setCount(count - 1);
    }
    const handelReset = () => {
        setCount(0);
    }

    return (
        <div className="carde">
            <h3>Count Task 1</h3>
            <h4>Count : {count}</h4>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelRemove}>Remove</button>
            <button onClick={handelReset}>Reset</button>
        </div>
    )
}