import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ItemContext from '../../context/item-context';
import { LIGHT_GRAY, MEDIUM_GRAY, DARK_GRAY } from '../../constants';
import { Foundation } from '@expo/vector-icons';

import FridgeList from '../../components/organisms/fridge-list';
import PrimaryButton from '../../components/atoms/buttons/primary';

const ViewAllItemsScreen = () => {
    const { items } = useContext(ItemContext);

    return (
        <>
            <View style={ styles.viewAllItemsScreen }>
                <PrimaryButton
                    style={ styles.addButton }
                    title={ <Foundation name="plus" size={18} color={ DARK_GRAY } /> }
                />
                <FridgeList 
                    icon={ <Foundation name="home" size={24} color={ LIGHT_GRAY } /> }
                    items={ items } 
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    viewAllItemsScreen: {
        flex: 1,
        paddingTop: 42,
        paddingHorizontal: 24,
        backgroundColor: MEDIUM_GRAY
    },
    addButton: {
        alignSelf: 'flex-start'
    }
});

export default ViewAllItemsScreen;