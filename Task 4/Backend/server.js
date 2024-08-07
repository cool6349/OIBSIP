const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');

//middlrwhere
app.use(express.json());

app.use(cors())

connectDB();


app.post('/register',async(req,res) => {
    try{
        const {username,password} = req.body;
        console.log(req.body);
        const user = new User({username,password});

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  if (!passwordRegex.test(password) ) {
    return res.status(400).send('Password must be one uppercase letter, one symbol, and be at least 8 characters long.');
  }
  
        await user.save();
        res.status(201).json({message:'registration successfully'})
  
    }
    catch(error){
          res.status(500).json({error:'Registration failed'});
    }
});


app.post('/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({erroe:'Invalid Username or Password'});

        }
        if(user.password !== password){
            return res.status(401).json({error:'Invalid Username or Password'});
        }

        res.status(200).json({message:'Login succesful'})
    }

    catch(error){
        res.status(500).json({message:'Login failed'})
    }
})

app.listen(port,() => {
    console.log(`server is listning on port ${port}`);
})