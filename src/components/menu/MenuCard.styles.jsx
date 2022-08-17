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
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 14,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 3,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-start',
    paddingVertical: 5,
    margin: 4,
    
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
    width: '60%',
    alignItems: 'center',
  },


})
