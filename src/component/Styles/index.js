const styles = {
	card: {
		shadowColor: '#000',
		backgroundColor: '#FFF',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		margin: 15,
		shadowRadius: 5,
		borderRadius: 5,
		elevation: 3,
	},
	title: {
		fontSize: 18,
		padding: 15,
	},
	image: {
		height: 450,
		zIndex: 2,
	},
	viewButton: {
		alignItems: 'flex-end',
		marginTop: -40,
		zIndex: 9
	},
	button: {
		width: 100,
		backgroundColor: '#09A6FF',
		opacity: 1,
		padding: 8,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFF'
	},
	activeIndicatorView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: 'black'
	},
	mainView: {
		backgroundColor: 'black',
		flex: 1
	},

	flatList: {
		backgroundColor: 'black'
	}
}


export default styles