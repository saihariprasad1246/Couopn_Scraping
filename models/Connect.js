const mongoose  = require("mongoose");

async function connectDatabase(){
    try{

        const connect  = await mongoose.connect("mongodb://admin:<root-passsword>@<ip-address>:27017/CouponDatabase?authSource=admin");
        return true

    }catch(err){
        console.log(err);
        return false
    }
}

module.exports = connectDatabase