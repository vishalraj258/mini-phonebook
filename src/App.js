import React, { Component } from 'react';
import './App.css';
import User from './User'
import 'tachyons'

class App extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            number:'',
            searchfield:'',
            contacts: [
            {name:'vishal',number:95679980},
            {name:'shubh',number:78678903}
        ]}
        let filteredcontacts=[];
    }
    //to delete a contact
    deleteEvent= (index,e) => {
        this.cont=Object.assign([],this.state.contacts)
        this.cont.splice(index,1);
        this.setState({contacts:this.cont})
    }
    //to Enter name
    onEnterName = (event) => {
        this.setState({name:event.target.value})
        console.log(event.target.value)
    }
    //to enter number
    onEnterNumber = (event2) => {
        this.setState({number:event2.target.value})
        console.log(event2.target.value)
    }
    //on clicking Add button
    onAdd = (event3) => {
        let newname=this.state.name;
        let newnumber=this.state.number;
        if(!newname || !newnumber){
            return
        }
        this.state.contacts.push({name:newname,number:newnumber})
        this.setState({name:'',number:''})
    }
    //to search
    onSearch = (event4) =>
    {
        this.setState({searchfield:event4.target.value})
        console.log(event4.target.value)
    }

    render() {
        let filteredcontacts=this.state.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            }
        );
        return(
            <div className='tc'>
                <h1>PHONEBOOK</h1>
                <input type='text' className='tc ma3 pa2 grow' value={this.state.name} onChange={this.onEnterName} placeholder='Enter Name'/>
                <input type='text' className='tc ma3 pa2 grow' value={this.state.number} onChange={this.onEnterNumber} placeholder='Enter Number'/>
                <input type='search' className='tc ma3 pa2 grow' onChange={this.onSearch} placeholder='Search'/>
                <button type='Add' className='tc ma2 pa2 grow' onClick={this.onAdd}>Add</button>
                <div id='statedisplay'>
                    <br/>New contact to be added<br/>
                    Name: {this.state.name}<br/>
                    Number: {this.state.number}<br/>
                </div>
                <div>
                    <ul type='none' id='contact'>
                        {
                            filteredcontacts.map((val,index)=>{
                                return(<User
                                key={index}
                                number={val.number} 
                                onDelete={this.deleteEvent.bind(this,index)}>{val.name}</User>)
                            })
                        }
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default App;