import Product from "../models/Product.js";

const addProduct = async (req, res) => {
    const { code } = req.body;

    const productExist = await Product.findOne({ code });

    if (productExist) { 
        const error = new Error("Product Already Exist");
        return res.status(400).json({ msg: error.message }); 
    }
    try {
        const product = new Product(req.body);
        await product.save();
        res.json({ msg: "Product created successfully" });
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async(req, res) => {
    const { code } = req.params;

    const product = await Product.findOne({ code });

    if (!product) { 
        const error = new Error("Product didn't Exist");
        return res.status(400).json({ msg: error.message }); 
    }

    try {

        product.code = req.body.code || product.code;
        product.name = req.body.name || product.name;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product;
    
        const updatedProduct = await product.save();
        res.json( updatedProduct );
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async(req, res) => {

    const { code } = req.params;
    const product = await Product.findOne({ code });

    if (!product) { 
        const error = new Error("Product didn't Exist");
        return res.status(400).json({ msg: error.message }); 
    }

    try {

        await product.deleteOne()
        res.json( {msg : "Product already deleted"} );
    } catch (error) {
        console.log(error);
    }

}

export {
    addProduct,
    updateProduct,
    deleteProduct
}