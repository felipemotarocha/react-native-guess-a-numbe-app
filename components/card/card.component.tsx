import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

export interface CardProps {
	children: React.ReactNode;
	passedStyles?: ViewStyle;
}

const Card: React.FunctionComponent<CardProps> = ({
	children,
	passedStyles,
}) => {
	return <View style={{ ...styles.card, ...passedStyles }}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 5,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
	},
});

export default Card;
