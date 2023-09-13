const express = require("express");
const router = express.Router(); // Create a router instance
const { createVendorBill, getVendorBills } = require("../Controllers/bills.controller");

router.get('/', (req, res) => {
    console.log('homepage');
    res.send('Homepage'); 
});

// Assuming "vendorBills" function is for creating a vendor bill
router.post("/vendorBills", createVendorBill);

// Assuming "getVendorBills" function is for fetching vendor bills
router.get("/getvendorBills", getVendorBills);

module.exports = router;
