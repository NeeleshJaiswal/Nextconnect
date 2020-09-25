const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(16),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(5px)'
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3)
	},
	submit: {
		marginTop: theme.spacing(3)
	},
	input: {
		paddingLeft: theme.spacing(1)
	}
});

export default styles;
