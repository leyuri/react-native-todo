import React from "react";
import styled from 'styled-components';

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    width: 375px;
    margin: 5px;
`;

const TextInput = styled.TextInput`
    background-color: #fff;
    border: 1px solid #1C5D99;
    padding: 10px;
`;
export default ({onSubmit}) => {
    const [value, setValue] = React.useState("");
    
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
        <TextInput
            placeholder = "Add a new item"
            onChangeText={v => setValue(v)}
            value={value}
            onSubmitEditing={() => {
                onSubmit(value);
                setValue("");
            }}
        />
    </KeyboardAvoidingView>
    )
}




