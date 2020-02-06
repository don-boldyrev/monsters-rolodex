import React, {Component} from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  render() {
    return (
      <div className='App'>
        <h1> Monsters rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          onChange={ this.onSearch }
        />
        <CardList monsters={
          this.state.monsters.filter(this.filterMonster)
        } />
      </div>
    )
  }
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    this.setState({
      monsters: users
    })
  }
  onSearch = e => {
    this.setState({
      searchField: e.target.value
    })
  }
  filterMonster = monster => {
    return monster.name
      .toLowerCase()
      .includes(this.state.searchField.toLowerCase())
  }
}

export default App;
