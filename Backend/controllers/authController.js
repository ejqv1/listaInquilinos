import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const login = async (req, res) => {
    console.log(req.body);
  try {
    const {email,password}=req.body;
    const userNow = await prisma.user.findUnique({where:{email:email}});
    if(userNow){
      console.log(userNow);
      const validate = userNow.password===password?true:false
      if(validate){
        res.status(200).json(userNow);
      }
      else{
        throw new Error("usuario/password incorrecto")
      }
    }
    else{
      throw new Error("usuario/password incorrecto")
    }
    

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};