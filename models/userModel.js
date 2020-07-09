const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema= mongoose.Schema({
fristName:{type:String,required:true},
lastName:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true}

});
userSchema.methods.compare=function(password){
    return bcrypt.compareSync(password,this.password);
}
module.exports=mongoose.model('User',userSchema);