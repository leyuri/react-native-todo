import React from "react";
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons'; 

// import { View, Tex } from "react-native"

const data = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
    no => ({ id: `${no}`, title: `해야할 일 ${no}`, done: (no % 2 ===0) }));

console.log(data);


const TouchableHighlight = styled.TouchableHighlight`

`;


//align-items: center는 가운데 정렬
const ItemView = styled.View`
    padding: 10px;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
    flex-flow: row;
    align-items: center;
`;

const Text = styled.Text`
    margin-left: 10px;
    color: ${props => props.done ? "#aaa" : "#000"};
`;


function Item({item}) {
    // props로..
    return (
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {}}>
            <ItemView>
                {item.done && <Ionicons name="ios-arrow-dropdown" size={24} color="#aaa" />}
                {!item.done && <Ionicons name="ios-radio-button-off" size={24} color="black" />}
                <Text done={item.done}>{item.title}</Text>
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