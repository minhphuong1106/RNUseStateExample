import React from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {orangeColor} from '../App';

type CustomInputProps = {
  label: string;
  placeholder: string;
  isShowBelowTitle?: boolean;
  belowTitle: string;
  changeText: (value: string) => void;
  value?: string;  
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  isShowBelowTitle,
  belowTitle,
  changeText,
  value,
}) => {
  return (
    <View style={{marginVertical: 5}}>
      <Text style={{color: orangeColor, fontWeight: 'bold'}}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={changeText}
        value={value}
        style={{
          borderWidth: 0.5,
          borderColor: '#D0D0D0',
          padding: 10,
          borderRadius: 5,
        }}
      />
      {isShowBelowTitle && (
        <Text
          style={{
            textAlign: 'right',
            color: orangeColor,
            textDecorationLine: 'underline',
          }}>
          {belowTitle}
        </Text>
      )}
    </View>
  );
};

export default CustomInput;
