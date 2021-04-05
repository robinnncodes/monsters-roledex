import React from 'react';
import {CardList} from './components/CardList/CardList';
import './App.css';
import {Search} from './components/Search/Search';

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      names:[],
      searchField: '',
    };
    this.handleClick2 = this.handleClick1.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users => this.setState({names: users}))
  }

  changeText = (e) => {
    this.setState({searchField: e.target.value})
  } 
  handleClick1() {
    console.log('hi');
  }


  handleClick3 = (e) => console.log("hihihihihi");

  render() {
    const {names, searchField} = this.state;
    const filteredMonsters = names.filter(name => name.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1> Monsters Roledex </h1>
        <Search placeholder="enter value" changeText={this.changeText}/>
        <CardList names={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
