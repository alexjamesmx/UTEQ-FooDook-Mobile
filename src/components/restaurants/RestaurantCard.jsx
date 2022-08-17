import { useNavigation } from '@react-navigation/native';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appcolor } from '../../constants/appcolor';
import { styles } from './RestaurantCard.styles';
import { addFavorites, getFavorites } from '../../firebase/firebase';
import useUser from '../../hooks/useUser';
import { useState, useEffect } from 'react';

export default function RestaurantCard(props) {
  const navigation = useNavigation();
  const { restaurant } = props;
  const { finalUser } = useUser(finalUser);
  const [exists, setExists] = useState(false);
  const { finalRefresh, setFinalRefresh } = useUser(finalRefresh);
  console.log(restaurant);
  const goToRestaurant = () => {
    navigation.navigate('RestaurantScreen', {
      id: restaurant.id,
      name: restaurant.name,
    });
  };

  const goToMap = () => {
    navigation.navigate('MapScreen', { id: restaurant.id });
  };

  const handleFavorites = async () => {
    const res = await addFavorites(
      restaurant.id,
      finalUser.uid,
      finalUser.docId
    );
    if (res) {
      setExists((prevState) => !prevState);
    } else {
      setExists((prevState) => !prevState);
    }
    setFinalRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    console.log('quitando corazon');
    (async () => {
      const res = await getFavorites(restaurant.id, finalUser.uid);
      if (res) {
        setExists(true);
      } else {
        setExists(false);
      }
    })();
  }, [finalRefresh]);

  return (
    <TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={goToRestaurant}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={styles.bgStyles}>
              <View style={styles.logoname}>
                <Text style={styles.name}>{restaurant?.name}</Text>
                <Image
                  source={{ uri: restaurant?.logo }}
                  style={styles.image}
                />
              </View>
              <View style={styles.numberdescription}>
                <Text style={styles.number}>
                  #{`${restaurant?.id}`.padStart(3, 0)}
                </Text>
                <Text>
                  {restaurant?.description}

                  {'\n'}
                  <Ionicons
                    name="logo-whatsapp"
                    size={20}
                    color={appcolor.appHeaderTextcolor}
                  />
                  {restaurant?.phone}
                  {'\n'}
                  <Ionicons
                    name="home-outline"
                    size={20}
                    color={appcolor.appHeaderTextcolor}
                    onPress={goToMap}
                  />
                  {restaurant?.adress}
                </Text>
              </View>
              <View style={styles.favorites}>
                {exists ? (
                  <Ionicons
                    name="heart"
                    size={34}
                    color={appcolor.appHeaderTextcolor}
                    onPress={handleFavorites}
                  />
                ) : (
                  <Ionicons
                    name="heart-outline"
                    size={34}
                    color={appcolor.appHeaderTextcolor}
                    onPress={handleFavorites}
                  />
                )}

                <Ionicons
                  name="location"
                  size={34}
                  color={appcolor.appHeaderTextcolor}
                  onPress={goToMap}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </TouchableWithoutFeedback>
  );
}
