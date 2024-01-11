import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [color, setColor] = useState("green");

    useEffect(() => {
        fetch("https://659fe7575023b02bfe8ac454.mockapi.io/person").then(
            (res) => res.json().then((data) => {
                setPeople(data);
            })
        );
    }, []);

    useEffect(() => {
        alert("change")
    }, [color])

    return (
        <div >
            <h1>People</h1>
            <button onClick={() => (setColor("Orange"))}>Change Color</button>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 '>
                {people.map(person => {
                    return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle} />
                })}

            </div>
        </div>
    )
}
