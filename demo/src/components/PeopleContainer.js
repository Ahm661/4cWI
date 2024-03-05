import React, { useEffect, useState } from 'react';
import Card from './Card';
import { FidgetSpinner } from 'react-loader-spinner';


export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        fetch("https://659fe7575023b02bfe8ac454.mockapi.io/person").then(
            (res) => res.json().then((data) => {
                setPeople(data);
                setFilteredPeople(data);
                setIsLoading(false);
            })
        );
    }, []);

    const filterPeople = (Filter) => {
        let filtered = people.filter((person) => person.name.toLowerCase().includes(Filter.toLowerCase()));
        setFilteredPeople(filtered);

    }


    return (
        <div className=''>

            <div className='fixed border mb-4 bg-green-400 w-full h-28 p-8'>

                <input className="border p-4" type="text" placeholder="search" onChange={(el) => {
                    console.log(el.target.value);
                    filterPeople(el.target.value);
                }} />
            </div>

            {isLoading && <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}} 
                wrapperClass="fidget-spinner-wrapper"
            />}
            {(filteredPeople.length == 0 && !isLoading) && (
                <div className='pt-40'>
                    <FidgetSpinner
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="fidget-spinner-loading"
                        wrapperStyle={{}}
                        wrapperClass="fidget-spinner-wrapper" />
                </div>
            )}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
                {filteredPeople.map(person => {
                    return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle} gender={person.gender} />

                })}

            </div>
        </div>
    )
}
