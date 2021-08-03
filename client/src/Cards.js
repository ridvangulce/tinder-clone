import React, {useEffect, useState} from 'react';
import TinderCard from "react-tinder-card";
import axios from "./axios"
import "./Cards.css"

function Cards({cards}) {
    const [people,setPeople]=useState([])
    useEffect(() => {
        axios.get('/tinder/card')
            .then(res=>{
                console.log(res.data)
                setPeople(res.data)
            })

    }, [])
    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + "left the screen!")
    }
    return (
        <div>
            {people.map((person) => (
                <TinderCard className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{backgroundImage: "url(" + person.url + ")"}}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>

            ))}
        </div>
    );
}

export default Cards;