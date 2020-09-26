const styles = (theme) => ({
	root: {
		width: 'inherit',
		backgroundColor: 'inherit',
		backdropFilter: 'blur(15px)',
		color: '#000035'
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	text: {
		margin: theme.spacing(1)
	},
	border: {
		margin: theme.spacing(1),
		borderBottom: '1px solid grey'
	},
	small: {
		width: theme.spacing(5),
		height: theme.spacing(5)
	},
	divider: {
		borderTop: '1px solid grey',
		marginTop: theme.spacing(1)
	},
	nomargin: {
		marginTop: 0,
		marginLeft: theme.spacing(1)
	},
	header: {
		width: '100%'
	}
});

export default styles;
