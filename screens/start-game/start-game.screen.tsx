import * as React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../../components/card/card.component';

export interface StartGameScreenProps {}

const StartGameScreen: React.FunctionComponent<StartGameScreenProps> = () => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!</Text>
			<Card passedStyles={styles.inputsContainer}>
				<Text>Select a Number</Text>
				<TextInput />
				<View style={styles.buttonsContainer}>
					<Button title='Reset' onPress={() => {}} />
					<Button title='Confirm' onPress={() => {}} />
				</View>
			</Card>
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
		width: 200,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
});

export default StartGameScreen;
