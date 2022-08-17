import { StyleSheet } from 'react-native'
import { appcolor } from '../../constants/appcolor'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: appcolor.background,
  },
  spacing: {
    padding: 5, 
  },
  bgStyles: {
    borderRadius: 15,
    paddingVertical: 5,
    backgroundColor: '#aaaaaa',
    flexDirection: 'row',
    height: 150,
  },

  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 14,
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingBottom: 4,
  },
  image: {
    width: '80%',
    height: '80%',
    
  },
  description: {
    textTransform: 'capitalize',
    textAlign: 'left',
    height: '100%',
    width: '100%',
    marginVertical: 1,
  },
  number: {
    position: 'absolute',
    right: 10,
    color: '#fff',
    fontSize: 8,
  },
  logoname: {
    flex: 1,
    width: '40%',
    alignItems: 'flex-start',
    marginLeft: 8,
    paddingBottom: 4,
  },
  numberdescription: {
    padding: 8,
    width: '52%',
    alignItems: 'center',
  },
  favorites: {
    width: '8%',
    alignItems: 'flex-end',
    marginRight: 6,
    justifyContent: 'flex-end',
  },
  botonmapa:{
     height: 100, 
     marginTop: 10,
     fontWeight: 'bold'
  },
})
