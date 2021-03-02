import { useState, useEffect } from 'react';

const useItems = userId => {
    const [items, setItems] = useState([]);
    // TODO: Get items from api for user 
    useEffect(() => {
        	setItems([
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
            ]);
    }, []);

    return [items, setItems];
}

export default useItems;