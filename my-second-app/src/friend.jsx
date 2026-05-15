export default function Friend({ friend }) {
    console.log(friend);
    const { name, email, phone, } = friend;
    const { street } = friend.address;

    return (
        <div className="carde">
            <h4>name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Street : {street}</p>
        </div>
    )
}