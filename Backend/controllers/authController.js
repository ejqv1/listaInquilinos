import { PrismaClient } from "@prisma/client";
import {hashSync,genSaltSync,compareSync} from "bcrypt";

const prisma = new PrismaClient();
const salt = genSaltSync(10);

export const createUser = async (req, res) => {
  const {email,password}=req.body;
  try {
    const userCreate = await prisma.user.create({
      data:{
        email:email,
        password:hashSync(password,salt)
      }
    });
    res.status(201).json(userCreate);
  } catch (error) {
    res.status(400).json({msg:error.message});
  }
};

export const login = async (req, res) => {
  try {
    const {email,password}=req.body;
    const userNow = await prisma.user.findUnique({where:{email:email}});
    if(userNow){
      const validate = compareSync(password,userNow.password);
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