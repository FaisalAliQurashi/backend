import express from "express"
// import cors from 'cors'
const app=express();
app.use(express.json())
// app.use(cors())
app.get("/",(req,res)=>{
res.send(new Date().toString())
})
app.delete("/user/:id",(req,res)=>{
    const {id}= req.params
    user=user.filter(obj=>obj.id !==id)
    res.send({message:"user deleted"})
})
app.put("/user/:id",(req,res)=>{
    const {id}= req.params
    const {name,age,father}= req.body
    const userIndex=user.findIndex(obj=>obj.id===id)
    if(userIndex !==-1){
        user[userIndex]={...user[userIndex],name,age,father}
        res.send({message:"user updated"})
    }else{
        res.send({message:"user not found"})
    }
})
// app.delete('/user/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const userIndex = user.findIndex(user => user.id === userId);

//     if (userIndex !== -1) {
//         user.splice(userIndex, 1);
//         res.send({ message: 'User deleted successfully' });
//     } else {
//         res.status(404).send({ message: 'User not found' });
//     }
// });
let user=[];
app.get("/user",(req,res)=>{
    res.send(user)
})
app.post('/user',(req,res)=>{
    user.push({...req.body,id:Date.now().toString(36)})

    res.send(req.body)

})   
app.listen(3000,()=>{
    console.log("Faisal")
})
