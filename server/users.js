const users=[]


const addUser=({id,name,room})=>{
    name=name.trim().toLowerCase()
    room=room.trim().toLowerCase()
    const existingUsers=users.find(person=>person.name===name && person.room===room)
    if(existingUsers){
        return {error:"User already exists "}
    }
    const user={id,name,room}
    users.push(user)
    return {user}

}


const removeUser=(id)=>{
    const index=users.findIndex(person=>person.id===id)
    if(index!==-1){
       return users.splice(index,1)[0]
    }

}


const getUser=(id)=>{
    const foundUser=users.find(person=>person.id===id)
    if(foundUser){
        return foundUser
    }
    else{
        return {error:"User doesnot exist"}
    }


}


const getUsersinRoom=(room)=>{
    return users.filter(allUsers=>allUsers.room===room)

}
module.exports={addUser,removeUser,getUser,getUsersinRoom}