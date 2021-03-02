import React, { useState, useEffect } from 'react';

const ItemContext = React.createContext();

const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([
            ...items,
            {
                id: '1',
                title: 'Milk, 0.5L',
                capacity: 30,
                expiryDate: new Date()
            },
            {
                id: '2',
                title: 'Peanuts, 250g',
                capacity: 90,
                expiryDate: new Date()
            },
            {
                id: '3',
                title: 'Coconut Oil, 250g',
                capacity: 10,
                expiryDate: new Date()
            },
        ])
    }, []);

    const addItem = item => {
        setItems([...items, item]);
    }

    const updateItem = (id, item) => {
        const index = items.findIndex(i => i.id === id);
        const _items = [...items];
        _items[index] = item;
        setItems(_items);
    }

    const deleteItem = id => {
        const _items = [...items];
        const index = _items.findIndex(item => item.id === id);
        _items.splice(index, 1);
        setItems(_items);
    }

    return (
        <ItemContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
            {children}
        </ItemContext.Provider>
    )
}

export { ItemProvider };
export default ItemContext;