import Order from "../models/Order.js";
import generateId from "../helpers/generateId.js";

const addOrder = async (req, res) => {
    const { products, description, client } = req.body;
    const orderID = generateId();
    try {
        const order = new Order({
            orderID,
            products,
            description,
            client,
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

export {
    addOrder,
    deleteOrder

}