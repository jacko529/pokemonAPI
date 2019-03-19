import React, { Component } from 'react'
import SimpleStorage from "react-simple-storage";


export default class Mypokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newItem: "",
          list: []
        };
      }
      

      deleteItem(id) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.id !== id);
    
        this.setState({ list: updatedList });
      }
    

  render() {
    return (
      <div>
            <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
      </div>
    )
  }
}
