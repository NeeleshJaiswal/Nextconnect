const styles = (theme) => ({
	list: {
		backgroundColor: 'inherit',
		backdropFilter: 'inherit'
	},
	user: {
		color: '#000000',
		fontWeight: 'bold'
	},
	text: {
		color: '#000035'
	},
	root: {
		width: '100%',
		margin: 0
	},
	paper: {
		//backgroundColor: 'rgba(255, 255, 255, 0.15)',
		//backdropFilter: 'blur(5px)',
		marginTop: theme.spacing(14),
		marginLeft: 0,
		marginRight: 0,
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
	}
});

export default styles;
