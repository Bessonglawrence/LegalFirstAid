import theme from './../../style/theme';

let container = {
    flex: 1, 
    backgroundColor: 'lightgrey', 
    
}
let scrollStyle = {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
}

let image = {
    height:'40%',
    width: '45%',
    borderRadius: theme.IMAGE_BORDER_RADIUS + 5,
}

let footer = {
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
}


let footerText = {
   color: '#721d4b',
   fontSize: 16,
   color: '#ffffffd0',
   fontWeight: '600'
}

let styles = {
    container,
    image,
    footer,
    footerText,
    scrollStyle
}

export default styles;