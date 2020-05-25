import React from "react";
import { Text } from "react-native"

const data = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
    no => ({ id: no, title: `해야할 일 ${no}`, done: (no % 2 ===0) }));
export default () => {
    return (<Text>TodoList</Text>)
}