var express = require('express');
var router = express.Router();
const Razorpay = require('razorpay');



router.get("/", function (req,res,next) {
    return res.status(200).json({msg:"get req"});
    
});


router.post('/create_order', async function (req,res, next) {
   try {
    var instance = await new Razorpay({
        key_id: process.env.key_id,  
        key_secret: process.env.key_secret
      });

    
    let amount= (parseInt(req.body.data.payment)*100);
    
   let order=  await instance.orders.create({amount, currency:"INR", receipt:"TXN_5678678"})
      
   //save the order detail in your db for record
    // console.log(order);

    return res.status(200).json({order});

    
       
   } catch (error) {
       
   }
    
});



module.exports=  router;