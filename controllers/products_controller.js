const Product = require('../models/products');
const User = require('../models/user');
// To create products 
module.exports.create = async (req, res) => {
    try {
    const product = new Product(req.body);
    const productSave=await product.save();
    console.log('product saved successfully');
    res.status(201).send(productSave);
    // res.status(201).json({ success: true , message:'Product saved successfully'});
    } catch (error) {
        res.status(401).json({ success: false, message: "Unauthorized Aceess" });

    }

};
// To fecth the products
module.exports.getProducts = async (req, res) => {

    try{
        const productsFetch = await Product.find({});
        console.log('product details fetched successfully');
        res.status(200).send(productsFetch);

    }catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }

}
// To delete the product
module.exports.deleteProducts = async function (req, res) {

    try{
        const _id = req.params.id;
        const productDelete=await Product.findByIdAndDelete({_id});
        console.log('product details deleted successfully');
        // res.status(200).send(productDelete);
        res.status(200).json({ success: true , message:'Product deleted successfully',productDelete:productDelete});

    }catch (error) {
        res.status(401).json({ success: false, message: "Unauthorized Aceess" });

    }

}
// To increment or decrement the qty of the product
module.exports.patchProducts = async function (req, res) {

    try{
        let _id =req.params.id;
        // console.log(_id);
        let product = await Product.findById({_id});
        let value = parseInt(req.query.number);
        let productQty = parseInt(product.quantity);
        let newValue = Number(productQty+value);
            product.quantity = newValue;
            await product.save()
        
        // res.status(200).send(product);
        res.status(200).json({success:true,product:product,message:"Updated successfully"});

    }catch(error) {
         res.status(401).json({ success: false, message: "Unauthorized Aceess" });

    }

}