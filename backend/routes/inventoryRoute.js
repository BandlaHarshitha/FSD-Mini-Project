// routes/Inventorys.js

const express = require('express');
const router = express.Router();
const Inventory =
    require('../models/inventory');

// Get all Inventorys
router.route('/').get((req, res) => {
    Inventory.find()
        .then(Inventorys =>
            res.json(Inventorys))
        .catch(err =>
            res.status(400).json('Error: ' + err));
});

// Add new Inventory
router.route('/add').post((req, res) => {
    const { medicineName, Quantity } = req.body;
    const newInventory =
        new Inventory({medicineName, Quantity});

    newInventory.save()
        .then(savedInventory => res.json(savedInventory))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update Inventory data
router.route('/update/:id').post((req, res) => {
    Inventory.findById(req.params.id)
        .then(Inventory => {
            Inventory.medicineName =
                req.body.medicineName;
            Inventory.Quantity =
                req.body.Quantity;
        

            Inventory.save()
                .then(
                    () =>
                        res.json('Inventory updated!'))
                .catch(
                    err => res.status(400)
                        .json('Error: ' + err));
        })
        .catch(
            err => res.status(400)
                .json('Error: ' + err));
});

// Delete Inventory
router.route('/delete/:id')
    .delete((req, res) => {
        Inventory.findByIdAndDelete(req.params.id)
            .then(
                () => res
                    .json('Inventory deleted.'))
            .catch(
                err => res
                    .status(400).json('Error: ' + err));
    });

module.exports = router;
