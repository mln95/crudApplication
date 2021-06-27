const fetch = require("node-fetch");

exports.home = async (req, res) =>{
        const response = await fetch('http://localhost:3000/api/user');
        try{
            const response_json = await response.json();
            res.render('index', {users:response_json});
        } catch(err){
            console.log(err);
        }
 }

 exports.addUser = (req, res) =>{
    res.render('addUser');
 }

 exports.updateUser = (req, res) =>{
     console.log(req.query.id)
 }