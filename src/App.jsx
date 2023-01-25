import { useEffect, useState } from 'react'
import './App.css'
import CardsList from './components/cards-list/cards-list';

function App() {
  const [SearchValue, setSearchValue] = useState('');
  const [Monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  var filteredMonsters = Monsters.filter((item) => {
    return item.name.toLowerCase().includes(SearchValue)
  })

  let catchEvent = (e) => {
    setSearchValue(e.target.value.toLowerCase())
  }
  return (

    <div className="App">
      <input type="search"
        className='search-box'
        placeholder='search monsters'
        onChange={catchEvent} />
      {/* {
        filteredMonsters.map((item) => {
          return <h1 key={item.id}>{item.name}</h1>
        })
      } */}
      <CardsList monsters={filteredMonsters} />

    </div>
  )
}

export default App
