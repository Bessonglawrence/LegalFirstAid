import theme from './../../style/theme';
const HEADER_MAX_HEIGHT = 200;
let styles = {
	fill: {
    flex: 1,
  },

  row: {
    height: 600,
    backgroundColor: 'white',
    // alignItems: 'center',
    padding: 30
  },

  header: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#03A9F4',
  overflow: 'hidden',
  },

  bar: {
    marginTop: 15,
    height: HEADER_MAX_HEIGHT - 30,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 20,
    marginLeft: 40,
    marginTop: 2
  },

  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT + 20,
    resizeMode: 'cover',
  },

  backIconStyle:{
    marginLeft: - 10, 
    flexDirection: 'row'
  },

  rightNav:{
    flexDirection: 'row',
    marginRight: 17
  },

  navItem:{
    marginLeft: 25
  }, 

  actionButtonView:{
    bottom: 620,
    position: 'absolute',
    right: 40, 
  }
}

export default styles;
