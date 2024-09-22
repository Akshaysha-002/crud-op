import Usermodels from "../models/user.js"

const CreatUser=async (req,res)=>{


    try {
        const {firstname,lastname,email,phone}=req.body

        const NewUser = new Usermodels({
            firstname,lastname,email,phone
        })
        await NewUser.save()
        res.status(200).json({success:true,message:`User Created Successfully`, NewUser})
    } catch (error) {console.log(error)
        res.status(500).json({success:false, message:`Internal Server error`, NewUser})
        
    }
}
// read api 
const GetUser=async(req,res)=>{
try {
    const user=await Usermodels.find()
    if(!user){
        return res.status(404).json({success:false, message:`User Not Found`})
    }
    res.status(200).json({success:true,user})
} catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:`Internal Server Error`})
}
}

//update user 

const UpdateUser=async(req,res)=>{
try {
   const UserId=req.params.id
    const updatedUser=await Usermodels.findByIdAndUpdate(UserId,req.body,
        {new:true})

        if(!updatedUser){
            return res.status(404).json({success:false, message:`User Not Found`})
        }
        res.status(200).json({success:true, message:`User Updated Sucssesfully`,
    updatedUser })

} catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:`Internal Server Error`})

}
}

// delete user

const DeletUser=async(req,res)=>{
try {
    const UserId=req.params.id 
    const deletedUser=await Usermodels.findByIdAndDelete(UserId)
    if(!deletedUser){
        return res.status(404).json({success:false, message:`User Not Fouund`})
    }
    res.status(200).json({success:true,message:`User Deletes Successfully`})

} catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:`Internal Server Error`})
}

}



export {CreatUser,GetUser,UpdateUser,DeletUser}
