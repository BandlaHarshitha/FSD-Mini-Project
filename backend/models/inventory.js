// models/Inventory.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InventorySchema = new Schema({
    MedicineName: { type: String, required: true },
    Quantity: { type: Number, required: true },
    
    // Add more fields as needed
});

const Inventory =
    mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;



