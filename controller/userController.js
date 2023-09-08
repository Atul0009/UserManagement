import User from "../models/user.js"

export default{

    async getUser(req,res){
        try{
            const users = await User.find();
            return res.status(200).send(users)

        }catch(err){
            return res.status(400).send(err)
        }
    },


    async updateUser(req,res){

        let request = req.body
        try{
            const { id } = req.params;
            const user = await User.findByIdAndUpdate(id, request, { new: true });
            return res.status(200).send(user)

        }catch(err){
            return res.status(400).send(err)
        }
    }
}
  

