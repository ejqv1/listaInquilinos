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
export const createInquilinos = (req, res) => {};

export const updateInquilinos = (req, res) => {};
export const deleteInquilinos = (req, res) => {};
