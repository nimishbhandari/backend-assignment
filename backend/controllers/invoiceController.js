import Invoice from "../models/invoiceModel.js";

// @route    POST api/invoice
// @desc     Create a new invoice
// @access   Public

const createInvoice = async (req, res) => {
  const {
    hoursOfWork,
    rateOfWork,
    workRelatedExpenses,
    materials,
    labor,
    notes,
    paymentMethod,
    customerEmail,
    status,
    dueDate,
  } = req.body;

  if (!hoursOfWork)
    return res.status(404).send("Please enter Hours of work (as hoursOfWork)");

  if (!rateOfWork)
    return res.status(404).send("Please enter rate of work (as rateOfWork)");

  if (!workRelatedExpenses)
    return res
      .status(404)
      .send("Please enter work related expenses (as workRelatedexpenses)");

  if (!materials) return res.status(404).send("Please enter material");

  if (!labor) return res.status(404).send("Please enter labor");

  if (!notes) return res.status(404).send("Please enter notes");

  if (!paymentMethod)
    return res
      .status(404)
      .send("Please enter payment method (as paymentMethod)");

  if (!customerEmail)
    return res
      .status(404)
      .send("Please enter customer email(as customerEmail)");

  if (!status) return res.status(404).send("Please enter status ");

  if (!dueDate)
    return res.status(404).send("Please enter due date (as dueDate)");

  try {
    const invoice = await Invoice.create({
      hoursOfWork,
      rateOfWork,
      workRelatedExpenses,
      materials,
      labor,
      notes,
      paymentMethod,
      customerEmail,
      status,
      dueDate,
    });

    res.status(201).json(invoice);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

const test = () => {
  console.log("test");
};

export { createInvoice, test };
