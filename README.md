# TaxAdda Backend Assignment

> This is the solution of the given task

---

<br>

## Setup

### Add a .env file in root folder with the following

<br>

> copy example.env.txt as .env

## <br>

---

## Install Dependencies

```bash
npm install
```

## Starting the project

```bash
npm start
```

## Create a new Invoice

### Endpoint

> (POST) http://localhost:5000/api/invoice

```json
{
  "hoursOfWork": "30",
  "rateOfWork": "78",
  "workRelatedExpenses": "500000",
  "materials": "wood, cement, paper",
  "labor": "45",
  "notes": "This is the 100th order",
  "paymentMethod": "Upi",
  "customerEmail": "nimishbhandari727521@gmail.com",
  "status": "Due",
  "dueDate": "2022-02-27"
}
```

## Update Invoice by ID

### Endpoint

> (PUT) http://localhost:5000/api/invoice/:id

(Anything Including Status can be updated from this endpoint) <br>
Example:

```json
{
  "hoursOfWork": "30",
  "status": "Due",
  "dueDate": "2022-02-27"
}
```

## Send Invoice In Email to customer by ID

### Endpoint

> (POST) http://localhost:5000/api/invoice/:id

<img src="./uploads/s1.png">

## Get All Invoices

### Endpoint

> (GET) http://localhost:5000/api/invoice

## Get All Late Invoices

### Endpoint

> (GET) http://localhost:5000/api/invoice/late
