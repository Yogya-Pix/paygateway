import React from 'react';
import { SafeAreaView, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import Details from '../../screens/DetailsScreen/Details';
import Favourite from '../../screens/FavouriteScreen/Favourite';
import Profile from '../../screens/ProfileScreen/Profile';




const BottomNavigation = ({ items, activeIndex, onPress }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.item,
              index === activeIndex ? styles.activeItem : null,
            ]}
            onPress={() => onPress(index)}
          >
            <Text style={[styles.itemText, index === activeIndex ? styles.activeText : null]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  activeItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  activeText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default BottomNavigation;
