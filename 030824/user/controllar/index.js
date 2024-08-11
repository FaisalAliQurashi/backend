import express from "express";
const router= express.Router();

router.post("/",(req,res)=>{
    res.send(req,"User post")
})

export default router;