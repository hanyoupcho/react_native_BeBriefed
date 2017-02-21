import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const StatusIndicator = (props) => (
	<View style={[styles.border, props.isUp && styles.isUpBorderColor]}>
		<Icon name={props.isUp ? 'check' : 'times'} size={180} style={[styles.icon, props.isUp && styles.isUpIcon]}/>
	</View>
);

const styles = StyleSheet.create({
	border: {
		borderWidth: 20,
		borderColor: '#F21D44',
		borderRadius: 200,
		width: 240,
		height: 240,
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	isUpBorderColor: {
		borderColor: 'green'
	},
	icon: {
		color: 'red',
		marginLeft: 30,
	},
	isUpIcon: {
		color: 'green',
		marginLeft: 0
	}
});

export default StatusIndicator;