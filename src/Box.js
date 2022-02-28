import React, { Component } from 'react'
import "./style.css";



class Box extends Component {


  state = {
    name : "",
    department: "",
    rating :"",
    arr : [],
    show: false
    
}
OnSubmit(e){
  e.preventDefault();

  const tempObj = {
    name : this.state.name,
    department : this.state.department,
    rating : this.state.rating
  } 
  this.state.arr.push(tempObj)
  this.setState({
    name : "",
    department : "",
    rating : "",
    show: true

  })

  
console.log(this.state.arr)
}


  render() {
    return (
      <>
      <div className='container'>
          <h1 style={{padding : 25}}>Employee Feedback Form</h1>
          <form>
          <label for = "ipt1">Name : </label>
          <input type = "text" id='ipt1' value={this.state.name} onChange = {(event) => {this.setState({name : event.target.value})}}></input><br></br>
          <label for = "ipt2">Department: </label>
          <input type = "text" id='ipt2' value={this.state.department} onChange = {(event) => {this.setState({department : event.target.value})}}></input><br></br>
          <label for = "ipt3">Rating : </label>
          <input type = "number" id='ipt3' value={this.state.rating} onChange = {(event) => {this.setState({rating : event.target.value})}}></input><br></br>
          

          </form>
          <button type='submit' onClick={this.OnSubmit.bind(this)}>SUBMIT</button>
          
      </div>
      {this.state.show && <div className='Employees_data'>
        {this.state.arr.length > 0 && this.state.arr.map((e) => {
          return (<div className='data'>
          <h1>{e.name} || {e.department} || {e.rating}</h1>
          </div>)

        })}

        </div>}
      </>
     
     
    )
  }
}

export default Box