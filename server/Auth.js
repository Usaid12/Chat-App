const express=require("express")

const fsPromises=require("fs").promises
const path=require("path")
const userDB = {
    users: require("./UsersDB.json"),
    setUsers: function (data) {
      this.users = data;
    },
  };


const handleSignup=async(req,res)=>{
    const {username,password}=req.body
    const duplicateUser=userDB.users.find(person=>person.username===username)
    
    if(duplicateUser){
        console.log(duplicateUser)
        res.status(401).json({message:"User ALready exists"})
    }
    else{
    const newUser={username,password}
    userDB.setUsers([...userDB.users,newUser])
    await fsPromises.writeFile(path.join(__dirname,"UsersDB.json"),JSON.stringify(userDB.users)
    )
    res.status(200).json({message:`User ${username} registered successfully`})}}

    


module.exports={handleSignup};