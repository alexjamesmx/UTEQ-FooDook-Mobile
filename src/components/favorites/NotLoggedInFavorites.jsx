import { Text, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

export default function NotLoggedInFavorites () {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <Text style={styles.mensaje}>
         Debes tener una sesion activa para poder visualizar tus favoritos. 
         {"\n"} 
         Favor de iniciar sesión.
      </Text>

      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnLogin}
        onPress={() => {
          navigation.navigate('AccountScreen')
        }}
      />
            <Text style={styles.mensaje}>
        ¿No tienes cuenta?
      </Text>
                <Button
            title="Crear  nueva cuenta"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btnRegister}
            type="outline"
            titleStyle={{ color: '#fff' }}
            onPress={() => {
              navigation.navigate('RegisterScreen')
            }}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#78df0',
    margin: 40,
  },
  btnContainer: {
    marginTop: 10,
    color: 'black',
  },
  btnLogin: {
    backgroundColor: '#E1701A',
    height: 50,
    borderRadius: 16,
    marginVertical: 16,
  },
  btnRegister: {
    backgroundColor: '#F7A440',
    height: 50,
    borderRadius: 16,
    marginVertical: 16,
  },
  mensaje: {
    textAlign: 'center',
    fontSize: 18,
  },
})
