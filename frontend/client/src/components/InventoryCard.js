// src/components/InventoryCard.js

import React from 'react';

const InventoryCard =
    (
        {
            Inventory,
            onEdit,
            onDelete
        }
    ) => {
        return (
            <div
                className="Inventory-card">
                <p>
                    <span>
                        Medicine:
                    </span>
                    {Inventory.MedicineName}
                </p>
                <p>
                    <span>
                        Quantity:
                    </span>
                    {Inventory.Quantity}</p>
                
                <div className='btn-container'>
                    <button onClick={
                        () =>
                            onEdit(Inventory)
                    }>
                        Edit
                    </button>
                    <button onClick={
                        () =>
                            onDelete(Inventory._id)
                    }>
                        Delete
                    </button>
                </div>

            </div>
        );
    };

export default InventoryCard;
