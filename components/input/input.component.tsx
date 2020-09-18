import * as React from 'react';
import { TextInput, StyleSheet, TextStyle, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
	additionalStyles?: TextStyle;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
	return (
		<TextInput
			{...props}
			style={{ ...styles.input, ...props.additionalStyles }}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});

export default Input;
