const mongoose = require ("mongoose");
const VendorBillSchema = new mongoose.Schema({
    vendorName : String,
    billNo : String,
    amount : Number,
    tax : Number,

})


module.exports = mongoose.model('VendorBill',VendorBillSchema);