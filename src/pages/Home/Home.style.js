import theme from './../../style/theme';
let styles = {
	container:{
		flex: 1,
		backgroundColor: '#f5f6fa'
	},
	text:{
		color: 'grey', 
		lineHeight: 20,
		paddingRight: 18
	},
	name:{
		fontSize: 16, 
		color:'grey'
	},
	time:{
		fontSize: 14, 
		color: 'lightgrey'
	},
	image:{
		height: 35, 
		width: 35, 
		borderRadius: 50,
		marginTop: 4
	},
	imageSection:{
		flexDirection: 'row', 
		paddingBottom: 18
	},
	card:{
		paddingLeft: 20, 
		paddingVertical: 15, 
		backgroundColor: 'white',
		marginVertical: 12,
		width:"95%",
		alignSelf: 'center',
		borderRadius: 3,
		elevation: 3
	},
	description:{
		color:'#0fbcf9', 
		fontSize: 17, 
		paddingBottom: 12
	},
	buttons:{
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: '#f5f6fa', 
		borderRadius: 3, 
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginRight: 10,
		borderWidth: 0.5,
		borderColor: 'lightgrey'
	},
	stats:{
		flexDirection: 'row',
	},
	statsSection:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 30,
		paddingTop: 15
	},
	statsFigures:{
		fontSize: 20
	},
	statsText:{
		marginTop: 6,
		marginLeft: 3,
		color: 'grey'
	},
	filterText:{
		color:'grey', 
		fontSize: 17,  
		borderColor: 'grey',
		backgroundColor:'#f5f6fa',
		paddingVertical: 5,
		paddingHorizontal: 8, 
		borderRadius: 3, 
		marginHorizontal: 8
	},
	postButton:{
		backgroundColor:'#00a8ff', 
		padding: 5, 
		width: '100%', 
		alignItems:'center', 
		justifyContent: 'center', 
		alignSelf: 'center', 
		marginTop: 10, 
		borderRadius: 3
	},
	modalContent:{
		backgroundColor:'white', 
		width: '100%', 
		width: 330, 
		height: 400
	},
	typeQuestion:{
		marginLeft: 1, 
		paddingTop: 8, 
		color: '#00a8ff', 
		fontSize: 15
	},
	inputView:{
		backgroundColor: '#00a8ff', 
		width: '100%', 
		justifyContent: 'center', 
		marginTop: 10
	},
	inputStyle:{
		paddingTop: 5,  
		fontSize: 18,
		color: 'white'
	},
}

export default styles;
