import React from "react";
import styled from 'styled-components';

// import { View, Tex } from "react-native"

const data = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
    no => ({ id: `${no}`, title: `해야할 일 ${no}`, done: (no % 2 ===0) }));

console.log(data);


const TouchableHighlight = styled.TouchableHighlight`

`;


const ItemView = styled.View`
    padding: 10px;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
`;

const Text = styled.Text`
    color: #444;
`;


function Item({item}) {
    // props로..
    return (
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {}}>
            <ItemView>
                <Text>{item.title}</Text>
            </ItemView>
        </TouchableHighlight>
    )
}





const FlatList = styled.FlatList`
    background-color: #fff;
    width:375px
`;



export default () => {

    return (
        
        <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
        />
    
    
    
    )
}