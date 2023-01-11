import express from "express"
import {
    getInquilinos,
    getInquilinosById,
    createInquilinos,
    deleteInquilinos,
    updateInquilinos
} from "../controllers/inquilinoController.js"

const router = express.Router();

router.get('/inquilinos',getInquilinos);
router.get('/inquilinos/:id',getInquilinosById);
router.post('/inquilinos',createInquilinos);
router.patch('/inquilinos/:id',updateInquilinos);
router.delete('/inquilinos/:id',deleteInquilinos);

export default router;