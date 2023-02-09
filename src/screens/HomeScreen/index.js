
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView, StyleSheet, Text, View, useState, Image, Pressable } from 'react-native';
// import BottomNavigation from '../../components/BottomTabNavigation/BottomTabNavigation';
import Profile from '../ProfileScreen/Profile';
import Details from '../DetailsScreen/Details';
import Favourite from '../FavouriteScreen/Favourite';
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { flingGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';
import { useNavigation } from '@react-navigation/native';
// import Navigation from '../../navigation';




const HomeScreen = () => {
  
  const navigation = useNavigation();

  return(
        
          
        <View style = {{
          backgroundColor: "#fff",
          flex: 1,
        }}>

          <View style = {{
            backgroundColor: '#BDB5D5',
            height: "28%",
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            paddingHorizontal: 20,
          }}>
            <Image
              source = {require('../../../assets/images/1.png')}
              style = {{
                height: 10, 
                width: 20, 
                marginTop:50,
              }}

            />
            <View style = {{
              flexDirection: "row", 
              alignItems: "center", 
              marginTop: 25,
              width: "100%",
            }}> 

              <View style = {{width:"50%"}}>
                <Text style = {{
                  fontSize: 28,
                  color: "#fff", 
                  fontWeight: "bold",

                }}>Hi User</Text>

              </View>

              <View style = {{width:"50%", alignItems:"flex-end"}}>

              </View>
            </View>
          </View>

          <LinearGradient colors = {["rgba(189, 181, 213,.2)", "transparent"]}
            style = {{
              left: 0 ,
              right: 0, 
              height: 90,
              margin: -5,
              marginTop: -14,
            }}
          >
            <View style = {{
              backgroundColor: "#FFF", 
              paddingVertical: 8,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15, 
              flexDirection: "row", 
              alignItems: "center"
            }}>
              <TextInput 
                placeholder='Search'
                placeholderTextColor='grey'
                style = {{
                  fontWeight: "bold",
                  fontSize: 18, 
                  width: 260
                }}
                
              />
              <Image 
              source={require('../../../assets/images/3.png')
            } 
              style = {{height: 20, width: 20,}}
              />
            </View>
            </LinearGradient>
             
            <View style = {{
              flexDirection: "row", 
              paddingHorizontal: 20, 
              width: "100%", 
              alignItems: "center"
            }}>
              <View style = {{width: "50%"}}>
                    <Text style = {{
                      fontWeight: "bold",
                      fontSize: 17, 
                      color: "#585a61"
                    }}>
                      OTT Platforms
                    </Text>

                    <View style={{
                      height: 4, 
                      backgroundColor: "#ble5d3",
                      width: 115,
                      marginTop: -5
                    }}>
                    </View>
              </View>

              <View style = {{width: "50%", alignItems: "flex-end"}}>     
              </View>
            </View>


            <ScrollView 
              horizontal
              showsHorizontalScrollIndicator = {false}
              style = {{height: 400}}
            >

            <LinearGradient 
            colors={["rgba(147,51,234,.02)", "transparent"]} 
            style = {{
              position: "absolute", 
              left: 0, 
              right: 0,
              height: 100, 
              marginTop: 220, 
              top: 0,
            }}
            />
            <Pressable 
              onPress={()=> navigation.navigate("Details")}
              style = {{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF", 
                marginLeft: 20, 
                borderRadius: 15, 
                marginBottom: 10, 
                width: 160,
              }}
            >

              <Image 
                
                source={
                  require("../../../assets/images/hotstar.png")}
                  style = {{
                    flex: 1, 
                    height:"100%",
                    width: "100%",
                  }}
              />

              <View style ={{
                  flexDirection: "row", 
                  paddingTop: 10, 
                  paddingHorizontal: 10,
              }}>
                <Text style = {{
                  fontWeight:"bold", 

                }}>
                  HotStar 
                </Text>
                <Text style = {{
                  fontWeight: "bold", 
                  color: "black",
                  paddingLeft: 65,
              }}>$20</Text>
              </View>
              <Text style = {{
                paddingHorizontal:10, 
                fontWeight: "bold", 
                color: "#BDB5D5", 
                paddingTop: 3, 

              }}>
                Buy Now
              </Text>

              </Pressable>
              <Pressable 
              onPress={()=> navigation.navigate("Details")}
              style = {{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF", 
                marginLeft: 20, 
                borderRadius: 15, 
                marginBottom: 10, 
                width: 160,
              }}
            >

              <Image 
                source={require("../../../assets/images/hotstar.png")}
                style = {{
                  flex: 1, 
                  height:"100%",
                  width: "100%",
                }}
              />

              <View style ={{
                  flexDirection: "row", 
                  paddingTop: 10, 
                  paddingHorizontal: 10,
              }}>
                <Text style = {{
                  fontWeight:"bold", 

                }}>
                  HotStar 
                </Text>
                <Text style = {{
                  fontWeight: "bold", 
                  color: "black",
                  paddingLeft: 65,
              }}>$20</Text>
              </View>
              <Text style = {{
                paddingHorizontal:10, 
                fontWeight: "bold", 
                color: "#BDB5D5", 
                paddingTop: 3, 

              }}>
                Buy Now
              </Text>

              </Pressable>
              <Pressable 
              onPress={()=> navigation.navigate("Details")}
              style = {{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF", 
                marginLeft: 20, 
                borderRadius: 15, 
                marginBottom: 10, 
                width: 160,
              }}
            >

              <Image 
                source={require("../../../assets/images/hotstar.png")}
                style = {{
                  flex: 1, 
                  height:"100%",
                  width: "100%",
                }}
              />

              <View style ={{
                  flexDirection: "row", 
                  paddingTop: 10, 
                  paddingHorizontal: 10,
              }}>
                <Text style = {{
                  fontWeight:"bold", 

                }}>
                  HotStar 
                </Text>
                <Text style = {{
                  fontWeight: "bold", 
                  color: "black",
                  paddingLeft: 65,
              }}>$20</Text>
              </View>
              <Text style = {{
                paddingHorizontal:10, 
                fontWeight: "bold", 
                color: "#BDB5D5", 
                paddingTop: 3, 

              }}>
                Buy Now
              </Text>

              </Pressable>
            </ScrollView>


            <View style = {{
              flexDirection: "row", 
              paddingHorizontal: 20, 
              width: "100%", 
              alignItems: "center"
            }}>
              <View style = {{width: "50%"}}>
                    <Text style = {{
                      fontWeight: "bold",
                      fontSize: 17, 
                      color: "#585a61"
                    }}>
                      Food Ordering platforms 
                    </Text>

                    <View style={{
                      height: 4, 
                      backgroundColor: "ble5d3",
                      width: 115,
                      marginTop: -5
                    }}>
                    </View>
              </View>


              <View style = {{width: "50%", alignItems: "flex-end"}}>
             </View>
          </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator = {false}
              style = {{marginBottom:-100,}}
            >
              <Image 
                source={require("../../../assets/images/3.png")}
                style ={{
                  marginTop: 20, marginHorizontal: 20, borderRadius:10,
                }}
              />

        </ScrollView>
        </View>
      
  );
}

export default HomeScreen;






// const items = [
//   { key: 'HomeScreen', title: 'Home' },
//   { key: 'Profile', title: 'Profile' },
//   { key: 'Favourite', title: 'Favourite' },
// ];

// const [activeIndex, setActiveIndex] = useState('');


// <BottomNavigation 
        // items={items}
        // activeIndex={activeIndex}
        // onPress={index => setActiveIndex(index)}
        // />