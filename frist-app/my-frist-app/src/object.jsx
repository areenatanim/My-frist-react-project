export default function Persons({ person }) {
    console.log(person);
    console.log(person.name);


    return (

        <div>
            <h3>name : {person.name} </h3>
            <p>age : {person.age} </p>
        </div>

    )
}