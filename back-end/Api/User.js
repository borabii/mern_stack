const express =require('express');
const mongose = require('mongoose');
const User =require ('../DB/User');
const route = express.Router();


route.post('/',  async (req, res) => {
    const{firstName,lastName} = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
     await userModel.save();
     res.json(userModel);
});

route.get('/',  async (req, res) => {
   User.find()
   .then(result =>{
       res.status(200).json({
           userdata:result
       });
   })
   .catch(err => {
       console.log(err);
       res.status(500).json({
           error:err
       })
   })
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    



module.exports =route;