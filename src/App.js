import { Component } from 'react'
import { CardList } from './components/card-list/card-list-component'
import { SearchBox } from './components/search-box/search-box-component'
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange= e => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredmosters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox 
          placeholder='Search here'
          searchChange={ this.handleChange }>
        </SearchBox>
          <CardList monsters={ filteredmosters }></CardList>
      </div>
    );
  }
}

export default App;
