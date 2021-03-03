import React, { useState } from 'react';
import { useReducer } from 'react';

const UPDATE_ADD_ITEM_NAME = "update_name";
const UPDATE_ADD_ITEM_CAPACITY = "update_capacity";
const UPDATE_ADD_ITEM_EXPIRY_DATE = "update_expiry_date";
const RESET_ADD_ITEM = "reset";

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
        case RESET_ADD_ITEM:
            return initial;
        default: 
            return state;
    }
}

const useAddItemForm = () => {
    const [state, dispatch] = useReducer(reducer, initial);

    const reset = () => {
        dispatch({ type: RESET_ADD_ITEM });
    }

    return [state, reset, dispatch];
}

export {
    UPDATE_ADD_ITEM_NAME,
    UPDATE_ADD_ITEM_EXPIRY_DATE,
    UPDATE_ADD_ITEM_CAPACITY
};
export default useAddItemForm;
