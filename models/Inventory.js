const mongoose = require("mongoose");
const InventorySchema = mongoose.Schema({
  product: {
    type: String,
    trim: true,
    required: [true, "Product Name Must Be Valid"],
  },
  inInventory: {
    type: Number,
    trim: true,
    required: [true, "Product Must Have Valid Number"],
  },
  sale: {
    type: Boolean,
    trim: true,
    default: false,
  },
});

const Inventory = mongoose.model("inventory", InventorySchema);

module.exports = Inventory;
