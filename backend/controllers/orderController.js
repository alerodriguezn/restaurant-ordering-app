import Order from "../models/Order.js";
import generateId from "../helpers/generateId.js";

const addOrder = async (req, res) => {
    const { products, description, client,total } = req.body;
    const orderID = generateId();
    try {
        const order = new Order({
            orderID,
            products,
            description,
            client,
            total
        });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: "Error creating order" });
    }
}

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {   
        await Order.findByIdAndDelete(id);
        res.status(200).json({ message: "Order deleted" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting order" });
    }

}

const getOrdersById = async (req, res) => {

    const { id } = req.params;

    console.log(id)

    try {
        const orders = await Order.find({client: id})

        console.log(orders)
        res.json(orders);
   
        
    } catch (error) {
        res.status(500).json({ message: "Not Found" });
    }


}

export {
    addOrder,
    deleteOrder,
    getOrdersById

}