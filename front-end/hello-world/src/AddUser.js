import React, { Component } from 'react'
import axios from 'axios';
export class AddUser extends Component {
    constructor(props) {
        super(props);
          
        this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
        this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
 
        this.state = {
            firstName: '',
            lastName: '',
           
        }
    }
    onChangeUserFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
 
    onChangeUserLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            
        };
        axios.post('http://localhost:6001/api/userModel', user)
            .then(res => console.log(res.data));
 
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                  <label>First name</label> <input type="text" value={this.state.firstName}
                                onChange={this.onChangeUserFirstName}/>
                   <label>Last name</label> <input type="text" value={this.state.lastName}
                                onChange={this.onChangeUserLastName}/>
                    <button type="submit"> ajouter</button>
                 </form>
            </div>
        )
    }
}

export default AddUser
