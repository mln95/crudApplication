const User = require('../model/user_schema')

exports.create = (req,res) =>{
    if(req.body.firstname === ''){
        res.status(400).send({message: 'there is no body from the form request'})
        return
    }
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })
    user.save().then((data)=>{
        res.redirect('/add-user')
    }).catch(err =>{
        res.status(500).send({message: err.message || "Some error occured while creating a user"})
    })
    
}
exports.find = (req, res) =>{
    User.find().then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({message: err.message})
    })
}

exports.update = (req, res) =>{
console.log(req.params._id, req.query._id)
}

exports.delete = (req, res) =>{
    
}