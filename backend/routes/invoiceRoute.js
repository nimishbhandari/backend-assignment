import express from "express";
import {
  createInvoice,
  updateInvoiceById,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.route("/").post(createInvoice);
router.route("/:id").put(updateInvoiceById);

export default router;
