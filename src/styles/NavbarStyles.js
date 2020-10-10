const styles = (theme) => ({
	root: {
		width: '100%',
		marginBottom: '0',
		position: 'fixed',
		zIndex: '99'
	},
	transition: {
		backgroundImage:
			'url("https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")',
		backgroundRepeat: 'repeat-x',
		backgroundSize: 'cover'
	},

	right: {
		padding: theme.spacing(1),
		'&:hover': {
			textDecoration: 'none',
			cursor: 'pointer'
		}
	},
	small: {
		width: theme.spacing(5),
		height: theme.spacing(5)
	},
	link: {
		color: 'white',
		textDecoration: 'none',
		'&:hover': {
			color: 'blue',
			textDecoration: 'underline',
			cursor: 'pointer'
		}
	}
});

export default styles;
