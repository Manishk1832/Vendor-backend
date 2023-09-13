const Bills = require("../Models/VendorBill");

const createVendorBill = async(req,res)=>{
    const {vendorName,billNo,amount,tax} = req.body;
    try{
    const newBills = new Bills({
        vendorName,
        billNo,
        amount,
        tax,

    });
    
    await newBills.save();

    res.status(201).json({
        message: 'Add item successfully',
        data: newBills
      });

    
}catch (err) {
    res.status(500).json(err.message)
  };
}


const getVendorBills = async(req,res)=>{
    try{
        const AllBills = await Bills.find();
        res.status(200).json({
            message:"AllBills",
            data: AllBills
        })
    }catch(error){
        res.status(401).json(error);
    }
}


module.exports = {
    createVendorBill,
    getVendorBills
}