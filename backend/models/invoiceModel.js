import mongoose from "mongoose";

const InvoiceSchema = mongoose.Schema(
  {
    hoursOfWork: { type: String },
    rateOfWork: { type: String },
    workRelatedExpenses: { type: String },
    materials: { type: String },
    labor: { type: String },
    notes: { type: String },
    paymentMethod: { type: String },
    customerEmail: { type: String },
    status: { type: String },
    dueDate: { type: String },
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model("Invoice", InvoiceSchema);

export default Invoice;
