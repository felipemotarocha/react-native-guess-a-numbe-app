import * as React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

export interface StartGameScreenProps {}

const StartGameScreen: React.FunctionComponent<StartGameScreenProps> = () => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!</Text>
			<View style={styles.inputsContainer}>
				<Text>Select a Number</Text>
				<TextInput />
				<View style={styles.buttonsContainer}>
					<Button title='Reset' onPress={() => {}} />
					<Button title='Confirm' onPress={() => {}} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputsContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 5,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
});

export default StartGameScreen;
