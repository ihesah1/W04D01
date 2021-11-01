import React, { Component } from 'react'
import Todoitem from './../todoitem'
import "./style.css"
export default class Todo extends Component {
     constructor(props) {
          super(props);
          this.state = {
            todos: [
              { id: 1, name: "play" },
              { id: 2, name: "sleep" },
            ],
          };
        }
      
        addTodo = (event) => {
          event.preventDefault();
          if (event.target.task.value) {
            this.setState({
              todos: [
                ...this.state.todos,
                {
                  id: this.state.todos.length + 1,
                  name: event.target.task.value,
                },
              ],
            });
          }
        };
      
        deleteTodo = (id) => {
          this.setState({
            todos: this.state.todos.filter((todo) => {
              return todo.id !== id;
            }),
          });
        };
      
        updateTodo = (id) => {
          const newValue = prompt("Enter the new value:");
          this.setState({
            todos: this.state.todos.filter((todo) => {
              if (todo.id === id) {
                return (todo.name = newValue);
              }
              return todo;
            }),
          });
        };
      
        render() {
          return (
            <div className="todo">
              <form onSubmit={this.addTodo}>
                <input type="text" name="task" />
                <button>Add Task</button>
              </form>
              <ul>
                {this.state.todos.map((todo, index) => {
                  return (
                    <TodoItem
                      todo={todo}
                      key={index}
                      deleteTodo={this.deleteTodo}
                      updateTodo={this.updateTodo}
                    />
                  );
                })}
              </ul>
            </div>
          );
        }
      }