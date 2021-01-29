import React , {useState, useEffect}from 'react'
import axios from 'axios';
function UserListe() {
   const [Users, setUsers] = useState([])
   
  
   useEffect(() => {
       axios.get('http://localhost:6001/api/userModel')
          .then(res => {
              console.log(res)
              setUsers(res.data.userdata);
          })
          .catch(err => {
              console.log(err)
          })
   })
   
    return (
        <div>
         <h1>liste of client</h1> 
          <ul>
              {
                  Users.map(user => (
                      <li key={user.id}>{user.firstName} {user.lastName}</li>
                  ))
              }
          </ul>
              
              
      
             
           
        </div>
    )
}

export default UserListe
