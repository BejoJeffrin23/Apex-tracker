const express=require('express')
const router=express.Router();
const fetch=require('node-fetch')
router.get('/:platform/:gamertag',async(req,res)=>{
try{
const headers={
    'TRN-Api-Key':process.env.KEY

}
const {platform,gamertag}=req.params;
const response = await fetch(`${process.env.URL}/profile/${platform}/${gamertag}`,
{headers})

const data= await response.json()

if(data.errors&&data.errors.length>0){
    return res.status(404).json({
        message:'profile not found'
    });
}

res.json(data)

}catch(err){
console.log(err);
res.status(500).json({
    message:'server error'
})
}
})


module.exports=router;