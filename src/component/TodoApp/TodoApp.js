import React, { Component } from 'react';
import"./TodoApp.css";

export default class TodoApp extends Component {

  state= {
    input:"",
    items:[ ]
  };

  handChange= (event) =>{

            this.setState({
              input:event.target.value
            })
   };

   storeItems= (event) => {
  
    event.preventDefault()
    const{input}=this.state;
    
    this.setState({
      items:[...this.state.items, input],
      input:""
    });
   } ;      
    
   deleteItem = (key) =>{
    console.log(key)
    const allItems= this.state.items;

    allItems.splice(key,1)

    this.setState({
      items:allItems
    })



   }

  render() {

    const {input, items} = this.state 
    console.log(items)

    return (
      <div className='todo-container'>
        <form className='input-section' onSubmit={this.storeItems}> 
        <h1>Todo App</h1>

            <input type="text"

            value={input}
             onChange={this.handChange}
             placeholder='Enter Items...' />
            
       
        </form>
        <ul>
      {items.map((data,index)=>(
        <li key={index}>
      
          {data} <i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i>

        </li>
      ))}
  
        </ul>
      </div>
    )
  }
}

