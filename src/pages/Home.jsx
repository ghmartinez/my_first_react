import { useEffect, useState } from "react";

const Home = () => {

  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/people/').then(res => res.json()).then(data => setPeople(data.results), [])
  })

  return (
    <div>
      <h1>Home</h1>
      <h2>{people.map((person, index) => {
        // eslint-disable-next-line react/jsx-key
        return (<div>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`} alt="" />
          <p key={index}>{`${index+1}. ${person.name}`}</p>
        </div>)
      })}
      </h2>
    </div>
  )
};

export default Home;
