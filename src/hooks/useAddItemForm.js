import React, { useState } from 'react';
import { useReducer } from 'react';

const UPDATE_ADD_ITEM_NAME = "update_name";
const UPDATE_ADD_ITEM_CAPACITY = "update_capacity";
const UPDATE_ADD_ITEM_EXPIRY_DATE = "update_expiry_date";


const initial = {
    name: "",
    capacity: 50,
    expiryDate: new Date()
}

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_ADD_ITEM_CAPACITY:
            return {...state, capacity: action.payload};
        case UPDATE_ADD_ITEM_EXPIRY_DATE:
            return {...state, expiryDate: action.payload};
        case UPDATE_ADD_ITEM_NAME:
            return {...state, name: action.payload};
        default: 
            return state;
    }
}

const useAddItemForm = () => {
    return useReducer(reducer, initial);
}

export {
    UPDATE_ADD_ITEM_NAME,
    UPDATE_ADD_ITEM_EXPIRY_DATE,
    UPDATE_ADD_ITEM_CAPACITY
};
export default useAddItemForm;
