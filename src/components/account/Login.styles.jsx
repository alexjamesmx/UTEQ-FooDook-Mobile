import { StyleSheet } from 'react-native'
import { appcolor } from '../../constants/appcolor'

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    paddingBottom: 100,
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    marginTop: 20,
    color: '#E1701A',
  },
  icon: {
    color: '#E1701A',
  },
  btnContainer: {
    marginTop: 10,
    color: 'black',
  },
  btnLogin: {
    backgroundColor: appcolor.boton,
    height: 50,
    width: 250,
    alignSelf: 'center',
    borderRadius: 16,
    marginVertical: 2,
  },
  btnRegister: {
    height: 50,
    width: 250,
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: "#F7A440",
    borderColor: '#12355B',
    marginBottom: 40,
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 58,
    textAlign: 'center',
    marginBottom: 24,
  },
  loginsubTitle: {
    position: 'relative',
    fontWeight: 'bold',
    fontSize: appcolor.subtitle,
    textAlign: 'center',
  },
  mensaje: {
    position: 'relative',
    fontWeight: 'bold',
    fontSize: appcolor.mensaje,
    textAlign: 'center',
  },
})
