import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ItemContext from '../../context/item-context';
import Modal from 'react-native-modal';
import { Foundation } from '@expo/vector-icons';
import { MEDIUM_GRAY, DARK_GRAY, LIGHT_GRAY } from '../../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import useAddItemForm, { 
    UPDATE_ADD_ITEM_NAME,
    UPDATE_ADD_ITEM_EXPIRY_DATE,
    UPDATE_ADD_ITEM_CAPACITY
} from '../../hooks/useAddItemForm';

import PrimaryButton from '../../components/atoms/buttons/primary';
import SecondaryButton from '../../components/atoms/buttons/secondary';
import FridgeList from '../../components/organisms/fridge-list';
import EditItem from '../../components/organisms/edit-item';
import AddItem from '../../components/organisms/add-item';

const Panel = ({ navigation }) => {
    const { items, deleteItem, addItem, updateItem } = useContext(ItemContext);
    
    // Edit item
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditingExpiryDate, setIsEditingExpiryDate] = useState(false);

    // Add item
    const [isAddingItem, setIsAddingItem] = useState(false);
    const [addItemForm, resetAddItemForm, dispatchAddItemForm] = useAddItemForm();

    const onPressFridgeItem = item => {
        setSelectedItem(item);
    }

    const onChangeExpiryDate = (id, date) => {
        setIsEditingExpiryDate(false);
        if (!date) return; // if date is undefined then the cancel button was clicked
        const item = {...items.find(item => item.id === id)};
        item.expiryDate = date;
        updateItem(id, item);
    }

    const onDeleteItem = id => {
        setSelectedItem(null);
        deleteItem(id);
    }

    const isExpiringSoon = item => {
        const difference = item.expiryDate.getTime() - new Date().getTime();
        const days = difference / (1000 * 3600 * 24);
        return days < 3;
    }

    const onSaveItem = () => {
        setIsAddingItem(false);
        const id = Math.floor(Math.random() * 9999);
        const item = {
            id,
            title: addItemForm.name,
            capacity: addItemForm.capacity,
            expiryDate: addItemForm.expiryDate
        }
        addItem(item);
        resetAddItemForm();
    }

    return (
        <>
            <View style={ styles.panel }>
                <View style={ styles.navigation }>
                    <PrimaryButton 
                        onPress={ () => setIsAddingItem(true) }
                        style={{ marginRight: 12 }}
                        title={ <Foundation name="plus" size={18} color={ DARK_GRAY } /> }
                    />
                    <SecondaryButton 
                        title="View all"
                        onPress={ () => navigation.navigate('ViewAllItems') }
                    />
                </View>
                    <ScrollView>
                        <FridgeList
                            items={ items.filter(item => isExpiringSoon(item)) }
                            icon={ <MaterialCommunityIcons name="clock-alert" size={24} color={ LIGHT_GRAY } /> }
                            onPressItem={ onPressFridgeItem }
                        />
                        <FridgeList
                            items={ items.filter(item => item.capacity < 25) }
                            icon={ <MaterialCommunityIcons name="cart" size={24} color={ LIGHT_GRAY } /> }
                            onPressItem={ onPressFridgeItem }
                        />
                    </ScrollView>
                <Modal 
                    style={ styles.modal } 
                    isVisible={ selectedItem !== null } 
                    backdropOpacity={ 0.3 } 
                    onBackdropPress={ () => setSelectedItem(null) } 
                    onBackButtonPress={ () => setSelectedItem(null) } 
                    useNativeDriver={ true }
                >
                    { selectedItem ? (
                        <EditItem 
                            item={ selectedItem }
                            onRequestEditExpiryDate={ () => setIsEditingExpiryDate(true) }
                            isEditingExpiryDate={ isEditingExpiryDate && !isAddingItem }
                            onChangeExpiryDate={ onChangeExpiryDate }
                            onDeleteItem={ onDeleteItem }
                        />
                    ) : <></> }
                </Modal>
                <Modal 
                    style={ styles.modal } 
                    isVisible={ isAddingItem } 
                    backdropOpacity={ 0.3 } 
                    onBackdropPress={ () => setIsAddingItem(false) } 
                    onBackButtonPress={ () => setIsAddingItem(false) } 
                    useNativeDriver={ true }
                >
                    <AddItem 
                        name={ addItemForm.name }
                        setName={ payload => dispatchAddItemForm({ type: UPDATE_ADD_ITEM_NAME, payload }) }
                        capacity={ addItemForm.capacity }
                        setCapacity={ payload => dispatchAddItemForm({ type: UPDATE_ADD_ITEM_CAPACITY, payload }) }
                        expiryDate={ addItemForm.expiryDate }
                        setExpiryDate={ payload => {
                            setIsEditingExpiryDate(false);
                            dispatchAddItemForm({ type: UPDATE_ADD_ITEM_EXPIRY_DATE, payload });
                        } }
                        isEditingExpiryDate={ isEditingExpiryDate && isAddingItem }
                        onRequestEditExpiryDate={ () => setIsEditingExpiryDate(true) }
                        onSave={ onSaveItem }
                    />
                </Modal>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        paddingTop: 36,
        paddingHorizontal: 24,
        backgroundColor: MEDIUM_GRAY
    },
    navigation: {
        flexDirection: 'row',
        marginTop: 12
    },
    modal: {
        margin: 0,
        justifyContent: 'flex-end',
    }
});

export default Panel;