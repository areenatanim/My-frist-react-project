import { use } from "react"
import Friend from "./friend";

export default function Friends({ friendsPromise }) {
    const friends = use(friendsPromise);
    console.log(friends);

    return (
        <div className="carde">
            <h3>Our Friends Group</h3>
            <p>friend name :{friends.length}</p>

            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}