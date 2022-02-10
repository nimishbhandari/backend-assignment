import express from "express";
import {
  createInvoice,
  sendEmailById,
  updateInvoiceById,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.route("/").post(createInvoice);
router.route("/:id").post(sendEmailById).put(updateInvoiceById);

export default router;
