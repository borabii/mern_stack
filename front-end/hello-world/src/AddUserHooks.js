import React, { useState } from 'react'
import axios from 'axios'
function AddUserHooks() {
    const [Inputs, setInputs] = useState({})
    
    
    
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...Inputs, [event.target.name]:event.target.value}));
    }

   const  handleSubmit = (event) => {
        if (event){
            event.preventDefault();
        }
        console.log(Inputs);
        axios.post('http://localhost:6001/api/userModel', Inputs)
        .then(res => console.log(res.data));
    }
    
    return (
        <div>
           <form onSubmit={handleSubmit}>
                  <label>First name</label> <input type="text" name="firstName" value={Inputs.FirstName}
                                onChange={handleInputChange}/>
                   <label>Last name</label> <input type="text" name="lastName" value={Inputs.LastName}
                                onChange={handleInputChange}/>
                    <button type="submit"> ajouter</button>
                 </form> 
        </div>
    )
}

export default AddUserHooks
