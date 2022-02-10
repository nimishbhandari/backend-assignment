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

// @route    PUT api/invoice/:id
// @desc     Update an invoice by id
// @access   Public
const updateInvoiceById = async (req, res) => {
  try {
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
    const invoice = await Invoice.findById(req.params.id);

    if (invoice) {
      invoice.hoursOfWork = hoursOfWork || invoice.hoursOfWork;
      invoice.rateOfWork = rateOfWork || invoice.rateOfWork;
      invoice.workRelatedExpenses =
        workRelatedExpenses || invoice.workRelatedExpenses;
      invoice.materials = materials || invoice.materials;
      invoice.labor = labor || invoice.labor;
      invoice.notes = notes || invoice.notes;
      invoice.paymentMethod = paymentMethod || invoice.paymentMethod;
      invoice.customerEmail = customerEmail || invoice.customerEmail;
      invoice.status = status || invoice.status;
      invoice.dueDate = dueDate || invoice.dueDate;

      res.status(201).json(invoice);
    } else {
      return res.status(404).send("No Invoice found");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

export { createInvoice, updateInvoiceById };
