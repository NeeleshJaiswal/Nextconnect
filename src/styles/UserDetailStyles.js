const styles = (theme) => ({
	large: {
		width: theme.spacing(30),
		height: theme.spacing(30),
		border: '2px solid grey'
	},
	eight: {
		width: '100%',
		height: '100%',
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5),
		overflow: 'visible',
		padding: '0',
		border: 'none',
		borderTop: 'medium solid #708090',
		color: '#333',
		textAlign: 'center'
	},
	text: {
		fontWeight: '500'
	},
	values: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	}
});

export default styles;
