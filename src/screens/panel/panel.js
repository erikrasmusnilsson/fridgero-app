import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { MEDIUM_GRAY, DARK_GRAY, LIGHT_GRAY } from '../../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PrimaryButton from '../../components/atoms/buttons/primary';
import SecondaryButton from '../../components/atoms/buttons/secondary';
import FridgeList from '../../components/organisms/fridge-list';
import Modal from '../../components/atoms/modal';

const Panel = () => {
    const [showModal, setShowModal] = React.useState(true);

    const mockedItems = [
        {
            id: '1',
            title: 'Milk, 0.5L',
            capacity: 30
        },  
        {
            id: '2',
            title: 'Peanuts, 250g',
            capacity: 90
        },
        {
            id: '3',
            title: 'Cashews, 50g',
            capacity: 10
        },
        {
            id: '4',
            title: 'Juice, 1.5L',
            capacity: 50
        },
        {
            id: '5',
            title: 'Juice, 1.5L',
            capacity: 50
        },
    ]

    return (
        <>
            <View style={ styles.panel }>
                <View style={ styles.navigation }>
                    <PrimaryButton 
                        style={{ marginRight: 12 }}
                        title={ <Foundation name="plus" size={18} color={ DARK_GRAY } /> }
                        onPress={ () => setShowModal(!showModal) }
                    />
                    <SecondaryButton 
                        title="View all"
                    />
                </View>
                <ScrollView>
                <FridgeList
                    items={ mockedItems }
                    icon={ <MaterialCommunityIcons name="clock-alert" size={24} color={ LIGHT_GRAY } /> }
                />
                <FridgeList
                    items={ mockedItems }
                    icon={ <MaterialCommunityIcons name="cart" size={24} color={ LIGHT_GRAY } /> }
                />
                </ScrollView>
            </View>
            <Modal visible={ showModal } onClose={ () => setShowModal(false) }>
                <Text>Hello!</Text>
            </Modal>
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
    }
});

export default Panel;