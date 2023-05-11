import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    orderID: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    products: [
      {
        productID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    description: {
      type: String,
      trim: true,
    },
  }, {
    timestamps: true,
  });

const order = mongoose.model("Order", orderSchema)

export default order