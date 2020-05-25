import React from "react";
import { View, Text, FlatList } from "react-native"

const data = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
    no => ({ id: `${no}`, title: `해야할 일 ${no}`, done: (no % 2 ===0) }));

console.log(data);
function Item({item}) {
    // props로..
    return (
        <View>
            <Text>{item.title}</Text>
        </View>
    )
}



export default () => {

    return (
        
        <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
        />
    
    
    
    )
}