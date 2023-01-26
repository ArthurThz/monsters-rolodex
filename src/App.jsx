import { useEffect, useState } from 'react'
import './App.css'
import CardsList from './components/cards-list/cards-list';
import SearchBox from './components/search-box/search-box';

function App() {
  const [SearchValue, setSearchValue] = useState('');
  const [Monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      .catch((err) => console.log(err))
  }, [])

  let filteredMonsters = Monsters.filter((item) => {
    return item.name.toLowerCase().includes(SearchValue)
  })

  let eventHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase())
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={eventHandler}
        placeholder='Search Mosters'
        className='monsters-search-box' />
      <CardsList monsters={filteredMonsters} />
    </div>
  )
}

export default App
