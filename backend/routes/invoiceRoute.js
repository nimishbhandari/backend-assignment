import express from "express";
import {
  createInvoice,
  getAllInvoices,
  getLateInvoices,
  sendEmailById,
  updateInvoiceById,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.route("/").post(createInvoice).get(getAllInvoices);
router.route("/:id").post(sendEmailById).put(updateInvoiceById);
router.route("/late").get(getLateInvoices);

export default router;
