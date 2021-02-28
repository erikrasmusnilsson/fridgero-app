import React from 'react';
import { ScrollView, View, StyleSheet, FlatList } from 'react-native';

import FridgeItem from '../../molecules/fridge-item';

const FridgeList = ({ icon, items }) => {

    const renderFridgeItem = ({ item }) => {
        return (
            <FridgeItem 
                title={ item.title } 
                capacity={ item.capacity } 
            />
        )
    }

    return (
        <View style={ styles.fridgeList }>
            <FlatList 
                data={ items }
                renderItem={ renderFridgeItem }
                keyExtractor={ item => item.id }
                ListHeaderComponent={ <View>{ icon }</View> }
                ListHeaderComponentStyle={ styles.icon }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fridgeList: {
        marginTop: 24
    },
    icon: {
        marginLeft: 24,
        marginBottom: 12
    }
});

export default FridgeList;