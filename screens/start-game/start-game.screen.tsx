import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';

import Card from '../../components/card/card.component';
import Input from '../../components/input/input.component';
import Colors from '../../constants/colors';

export interface StartGameScreenProps {}

const StartGameScreen: React.FunctionComponent<StartGameScreenProps> = () => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState<number>();

	const numberInputHandler = (inputText: string) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number!',
				'Number has to be between 1 and 99.',
				[
					{
						text: 'Okay',
						style: 'destructive',
						onPress: resetInputHandler,
					},
				]
			);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
	};

	let confirmedOutput;
	if (confirmed) {
		confirmedOutput = <Text>Chosen number: {selectedNumber}</Text>;
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game!</Text>
				<Card passedStyles={styles.inputsContainer}>
					<Text>Select a Number</Text>
					<Input
						additionalStyles={styles.input}
						keyboardType='number-pad'
						maxLength={2}
						value={enteredValue}
						onChangeText={numberInputHandler}
					/>
					<View style={styles.buttonsContainer}>
						<View style={styles.button}>
							<Button
								title='Reset'
								color={Colors.accent}
								onPress={resetInputHandler}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title='Confirm'
								color={Colors.primary}
								onPress={confirmInputHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
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
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		textAlign: 'center',
	},
});

export default StartGameScreen;
