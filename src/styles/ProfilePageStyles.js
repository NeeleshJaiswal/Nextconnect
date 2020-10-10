const styles = (theme) => ({
	root: {
		width: '100%',
		margin: 0
	},
	paper: {
		marginTop: theme.spacing(14),
		marginLeft: 0,
		marginRight: 0,
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
	},
	fixed: {
		marginTop: theme.spacing(14),
		marginLeft: 0,
		marginRight: 0,
		width: '70%',
		padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(8)}px ${theme.spacing(5)}px`,
		position: 'sticky',
		top: theme.spacing(14)
	}
});

export default styles;
