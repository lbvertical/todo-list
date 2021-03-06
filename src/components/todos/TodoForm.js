import React from 'react';

const List = ({ name, items }) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {
        items.map( item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  </div>
)

export default List;
import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = { 
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn Router', complete: false }
    ] 
  }
  
  render() {
    const { todos } = this.state
    return (
      <div>
        <TodoForm />
        <List name='Todo List' items={todos}/>
      </div>
    );
  }
}

export default App;