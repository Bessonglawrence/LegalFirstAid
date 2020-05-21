const mainContainer={
	flex:1,
}

/*Heading*/
const headerContainer={
	flex:1, 
	justifyContent:'center', 
	alignItems: 'center', 
	backgroundColor:'#00a8ff', 
	paddingBottom: 40,
	paddingTop: 10,
}
const headerImage = {
	marginTop: 40,
	height:'70%', 
	width: '47%',
	borderRadius: 70 
}
const headerText = {
	textAlign: 'center', 
	fontSize: 14,
	lineHeight: 22,
	margin: 6,
	fontStyle: 'italic',
	color: 'white'
}

/*Body*/
const bodyContainer={
	backgroundColor: 'white', 
	flex: 2,
	marginTop: 15
}

const menuItem = {
	flexDirection: 'row',
	/*borderBottomWidth: 1,
	borderColor: 'rgba(204,204,204,0.3)',*/
	paddingVertical: 8,
}

const text = {
	fontSize: 16,
	color: 'grey',
	fontStyle: 'italic',
	marginTop: 2,
	alignSelf: 'center'
}

const icon = {
	marginTop: 4,
	marginHorizontal:15,
	
}

const styles = {
	menuItem,
	text,
	icon,
	headerText,
	headerImage,
	headerContainer,
	bodyContainer,
	mainContainer
}

export default styles;