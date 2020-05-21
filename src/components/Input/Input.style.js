import theme from './../../style/theme';
const height = 43;

const textInput = { 
	borderWidth: 1, 
	borderColor: theme.PRIMARY_COLOR, 
	fontSize: theme.FONT_SIZE_SMALL, 
	paddingLeft: 10,
	borderRadius: 5,
	paddingTop: 9,
	fontSize: 16
}
const select = {
	width: '100%', 
	height: height,
	borderWidth: 1,
	borderColor: theme.PRIMARY_COLOR,
}
const textInputHeight = {
	height: height,
}
const multilineInputHeight = {
	maxHeight: height*3.2,
}
export default {
	textInput,
	textInputHeight,
	multilineInputHeight,
	select
};