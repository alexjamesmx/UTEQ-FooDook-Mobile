import { StyleSheet } from 'react-native'
import { appcolor } from '../constants/appcolor'
export const styles = StyleSheet.create({
  container: {
    backgroundColor: appcolor.background,
    flex: 1,
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#aaaaaa',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    alignSelf: 'center',
    paddingLeft: 10,

  },
  textInput: {
    paddingLeft: 10,
    flex: 1,
    height: 40,
    fontSize: appcolor.texto,
  },
})
