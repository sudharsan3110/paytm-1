import express from 'express';

const router = express.Router();

router.get("/signup",(req,res)=>{

})
router.post("/signup",(req,res)=>{

});


import z from "zod";
 const User = z.object({
    name : z.string(),
    email: z.string().email(),
    age: z.number().optional()
 })



 module.exports = router;
