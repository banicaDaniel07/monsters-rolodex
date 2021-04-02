import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.components';
class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchFiled: ''
    };
  }
    
  handleChange = e =>{
      this.setState({searchFiled: e.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res => res.json()))
    .then(users => this.setState({monsters: users}));
  }

  render(){

  const {monsters, searchFiled} = this.state;
  const filtredMonsters = monsters.filter(monster =>
     monster.name.toLowerCase().includes(searchFiled.toLocaleLowerCase())
     )

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
      placeholder='Search Monsters' 
      handleChange = {this.handleChange}
      />
      <CardList monsters={filtredMonsters}></CardList>
    </div>  
  ); 
  }
}

export default App;
