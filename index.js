//Express
//const { request } = require("express");
//const { response } = require("express");
const express=require("express");

//initializing
const sri=express()
sri.use(express.json())

sri.get("/",(request,response)=>{
    return response.json({"hi":"heloo value"})
})
 sri.get("/b1/:userid",(request,response) =>{
    
    const users=[
    {
        id:1,
        name:"sri"
    },
    {
        id:2,
        name:"srikanth"
    }]
     const userId=request.params.userid
     const getUser=users.filter((user)=>parseInt(userId)===user.id)
     if(getUser.length===0){
         return response.json({error:"No User Found !!!!!"})
     }
    return response.json({user:getUser[0]})
 })
sri.listen(3000,() => console.log("HEy sri sevrer is sending data"));