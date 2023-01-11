import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getInquilinos = async (req, res) => {
  try {
    const response = await prisma.inquilino.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getInquilinosById = async (req, res) => {
    try {
        const response = await prisma.inquilino.findUnique({
            where:{
                id: Number (req.params.id)
            }
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(404).json({ msg: error.message });
      }
};
export const createInquilinos = async (req, res) => {
  const {name,lastName,sindicato,phone,tutor,university}=req.body;
  try {
    const inquilinos = await prisma.inquilino.create({
      data:{
        name:name,
        lastName:lastName,
        sindicato:sindicato,
        phone:phone,
        tutor:tutor,
        university:university
      }
    });
    res.status(201).json(inquilinos);
  } catch (error) {
    res.status(400).json({msg:error.message});
  }
};

export const updateInquilinos = async (req, res) => {
  const {name,lastName,sindicato,phone,tutor,university}=req.body;
  try {
    const inquilinos = await prisma.inquilino.update({
      where:{
        id: Number(req.params.id)
      },
      data:{
        name:name,
        lastName:lastName,
        sindicato:sindicato,
        phone:phone,
        tutor:tutor,
        university:university
      }
    });
    res.status(200).json(inquilinos);
  } catch (error) {
    res.status(400).json({msg:error.message});
  }
};
export const deleteInquilinos = async(req, res) => {
  try {
    const inquilinos = await prisma.inquilino.delete({
      where:{
        id: Number(req.params.id)
      }
    });
    res.status(200).json(inquilinos);
  } catch (error) {
    res.status(400).json({msg:error.message});
  }
};

