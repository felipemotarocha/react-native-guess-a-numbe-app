import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';

import Card from '../../components/card/card.component';
import Input from '../../components/input/input.component';
import Colors from '../../constants/colors';

export interface StartGameScreenProps {}

const StartGameScreen: React.FunctionComponent<StartGameScreenProps> = () => {
	const [enteredValue, setEnteredValue] = useState('');

	const numberInputHandler = (inputText: string) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

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
								onPress={() => {}}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title='Confirm'
								color={Colors.primary}
								onPress={() => {}}
							/>
						</View>
					</View>
				</Card>
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
