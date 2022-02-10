import express from "express";
import {
  createInvoice,
  getAllInvoices,
  sendEmailById,
  updateInvoiceById,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.route("/").post(createInvoice).get(getAllInvoices);
router.route("/:id").post(sendEmailById).put(updateInvoiceById);

export default router;
