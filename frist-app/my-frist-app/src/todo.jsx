
// option = 01
// export default function Todo({ name, work }) {
//     return (
//         <ul>
//             <li>areena : {name}: {work} </li>

//         </ul>

//     )
// }

// option = 02

// export default function Task({ task, isDone }) {
//     if (isDone === "true") {
//         return <h3>task status : {task} </h3>
//     }
//     else {
//         return <h3>Pending Task : {task} </h3>
//     }
// }

//option = 03 
// export default function Task({ task, isDone, time = 0 }) {
//     if (isDone === "true") {
//         return <h3>task status  : {task}    Duration : {time}</h3>
//     } return <h3>Pending Task  : {task}    Duration for the task : {time} </h3>

// }

// option = 04

// export default function Task({ task, isDone, time = 0 }) {
//     return isDone === "true" ? <li>Complite : {task} Time For the work : {time} </li> : <li>Panding work : {task} </li>
// }

// option = 05 with && operator


// export default function Task({ task, isDone, time = 0 }) {
//     return isDone === "true" && <li>Done task : {task} time : {time}</li>
// }

// // option = 06 or operator || 
// export default function Task({ task, isDone, time = 0 }) {
//     return isDone === "false" || <li>Not  Done task : {task} time : {time}</li>
// }
// option = 07
// export default function Task({ task, isDone, time = 0 }) {
//     return isDone === "false" && <li>Not  Done task : {task} time : {time}</li>
// }
// option = 08
// export default function Task({ task, isDone, time = 0 }) {
//     if (isDone === "true") {
//         return null;
//     } return <li>Not  Done task : {task} time : {time}</li>;
// }


// option =09

export default function Task({ task, isDone, time = 0 }) {
    let listItem;
    if (isDone === "true") {
        listItem = <li>Done : {task} time : {time ? "i am Done" : 'note Done yet'} </li>
    }
    else {
        listItem = <li>Pending : {task}</li>
    }
    return listItem;
}