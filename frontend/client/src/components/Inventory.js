//Inventorys.js
import React,
{
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import InventoryCard
    from './InventoryCard';
import './Inventorys.css'

const Inventorys = () => {
    const [Inventorys, setInventorys] = useState([]);
    const [newInventory, setNewInventory] =
        useState(
            {
                MedicineName: '',
                Quantity: ''
            });
    const [selectedInventory, setSelectedInventory] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);


    useEffect(() => {
        axios
            .get(
'http://localhost:5000/Inventorys')
            .then(
                response =>
                    setInventorys(response.data))
            .catch(
                error =>
                    console.error('Error fetching Inventorys:', error)
            );
    }, []);

    const handleAddInventory =
        (e) => {
            e.preventDefault();

            axios
                .post(
'http://localhost:5000/Inventorys/add', newInventory)
                .then(response => {
                    console.log(response.data);
                    setInventorys(
                        [
                            ...Inventorys,
                            response.data]);
                    setNewInventory(
                        {
                            MedicineName: '',
                            Quantity: ''
                        });
                })
                .catch(error =>
                    console.error('Error adding Inventory:', error));
        };

    const handleUpdateInventory =
        (id, e) => {
            e.preventDefault();
            axios
                .post(
`http://localhost:5000/Inventorys/update/${id}`, selectedInventory)
                .then(response => {
                    console.log(response.data);
                    const updateApp = {
                        ...selectedInventory,
                        _id: id
                    };
                    setInventorys(
                        Inventorys.map(
                            Inventory =>
                            (Inventory._id === id
                                ? updateApp :
                                Inventory)
                        ));
                    setSelectedInventory(null);
                    setIsEditMode(false); // Switch back to Add mode
                })
                .catch(
                    error =>
                        console.error('Error updating Inventory:', error));
        };

    const handleDeleteInventory =
        (id) => {
            axios
                .delete(
`http://localhost:5000/Inventorys/delete/${id}`)
                .then(response => {
                    console.log(response.data);
                    setInventorys(
                        Inventorys.filter(
                            Inventory =>
                                Inventory._id !== id)
                    );
                })
                .catch(error =>
                    console.error('Error deleting Inventory:', error));
        };

    const handleEditInventory =
        (Inventory) => {
            setSelectedInventory(Inventory);
            setIsEditMode(true); // Switch to Edit mode
        };

    return (
        <div className='flex-row' style={{ width: "100%" }}>
            <div className='flex-column'>
                <div className='add-form'>
                    <h4>
                        {
                            isEditMode ?
                                'Edit Inventory' :
                                'Add New Inventory'
                        }
                    </h4>
                    <form className="Inventory-form"
                        onSubmit={
                            isEditMode ?
                                (e) =>
                                    handleUpdateInventory(selectedInventory._id, e) :
                                handleAddInventory
                        }>
                        <label>Medicine Name:</label>
                        <input type="text"
                            value={
                                isEditMode ?
                                    selectedInventory.MedicineName :
                                    newInventory.MedicineName
                            }
                            onChange={
                                (e) =>
                                    isEditMode ?
                                        setSelectedInventory(
                                            {
                                                ...selectedInventory,
                                                MedicineName: e.target.value
                                            }) :
                                        setNewInventory(
                                            {
                                                ...newInventory,
                                                MedicineName: e.target.value
                                            })} />
                        <label>Quantity:</label>
                        <input type="text"
                            value={
                                isEditMode ?
                                    selectedInventory.Quantity :
                                    newInventory.Quantity
                            }
                            onChange={
                                (e) =>
                                    isEditMode ?
                                        setSelectedInventory(
                                            {
                                                ...selectedInventory,
                                                Quantity: e.target.value
                                            }) :
                                        setNewInventory(
                                            {
                                                ...newInventory,
                                                Quantity: e.target.value
                                            })} />
                        
                        <button type="submit">
                            {
                                isEditMode ?
                                    'Update Inventory' :
                                    'Add Inventory'
                            }
                        </button>
                    </form>
                </div>
            </div>
            <div className='Inventorys'>
                <h3>Inventorys
                    (
                    {
                        Inventorys.length
                    })
                </h3>
                <div className="Inventory-list">
                    {Inventorys.map(Inventory => (
                        <InventoryCard
                            key={Inventory._id}
                            Inventory={Inventory}
                            onEdit={handleEditInventory}
                            onDelete={handleDeleteInventory}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Inventorys;

