import { StyleSheet, View } from 'react-native'
import { appcolor } from '../constants/appcolor'
import MapCard from '../components/map/MapCard';

export default function Map() {
/*

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}


export default function MapNavigation (props) {
  const { navigation, route } = props
  const [refreshing, setRefreshing] = useState(false)
  const [map, setMap] = useState([])
  console.log(route, 'NAVIGATION,', navigation.getParent())

  useEffect(() => {
    // if (route.params.comeFrom) {
    //   navigation.setOptions({
    //     headerLeft: () => (
    //       <Ionicons
    //         name="arrow-back"
    //         size={32}
    //         color={appcolor.appHeaderTextcolor}
    //         style={{ marginLeft: 24 }}
    //         onPress={() => {
    //           navigation.reset({
    //             index: 0,
    //             routes: [{ name: 'Favorites' }],
    //           })
    //         }}
    //       />
    //     ),
    //   })
    // }

    ;(async () => {
      setMap(await getMap(route.params.id))
    })()
  }, [refreshing])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(1000).then(() => setRefreshing(false))
  }, [])

  function handleRefresh () {
    onRefresh()
  }

*/
  return (
    
      <View >
      <MapCard/>
      </View>
    
  )
}
  /*
}
*/
const styles = StyleSheet.create({
  container: {
    backgroundColor: appcolor.background,
    flex: 1,
  },
})
