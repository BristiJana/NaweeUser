import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  navigation,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ficon from 'react-native-vector-icons/Fontisto';
import Qicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Aicon from 'react-native-vector-icons/AntDesign';
import Iicon from 'react-native-vector-icons/Ionicons';
import Fecon from 'react-native-vector-icons/Feather';
import Home from './src/Screens/Home';
import Faq from './src/Screens/Faq';
import Setting from './src/Screens/Setting';
import Profile from './src/Screens/AgentAccount';
import Contact from './src/Screens/Contact';
import Wallet from './src/Screens/Wallet';
import Order from './src/Screens/Order';
import Confirm from './src/Screens/AgentConfirm';
import Confirm2 from './src/Screens/AgentConfirm2';
import Request from './src/Screens/Request';
import Delivery from './src/Screens/DeliveryRequest';
import DelayedDelivery from './src/Screens/DelayedDelivery';

function HomeScreen() {
  return <Home />;
}

function ProfileScreen() {
  return <Profile />;
}

function OrderScreen() {
  return <Order />;
}

function WalletScreen() {
  return <Wallet />;
}
function FAQScreen() {
  return <Faq />;
}

function SettingScreen() {
  return <Setting />;
}

function ContactScreen() {
  return <Contact />;
}

function Logout() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Logout Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FA8832'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 260,
            backgroundColor: '#FF9F45',
            height: 82,
            marginLeft: 12,
            marginTop: 32,
            borderRadius: 5,
          }}>
          <Image
            source={require('./homep.png')}
            style={{marginTop: 17, marginLeft: 16}}
          />
          <View style={{marginTop: 17, marginRight: 38}}>
            <Text style={{color: '#fff'}}>John Doe</Text>
            <Text style={{color: '#fff'}}>dummydoe@gmail.com</Text>
            <Image source={require('./starss.png')} />
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#FA8832', paddingTop: 15}}>
          <DrawerItemList {...props} />
        </View>

        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            marginTop: 80,
            backgroundColor: '#FA8832',
          }}>
          <TouchableOpacity
            onPress={() => {
              ContactScreen;
            }}
            style={{paddingVertical: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 2,

                height: 40,
                width: 208,
                borderRadius: 5,
                borderColor: 'white',
                borderStyle: 'solid',
              }}>
              <Iicon
                name="ios-call-outline"
                size={22}
                color="#fff"
                style={{paddingLeft: 40}}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  paddingLeft: 16,
                  color: 'white',
                  paddingBottom: 3,
                }}>
                Support
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <ImageBackground style={{padding: 20, backgroundColor: '#FA8832'}}>
              <Image
                source={require('./yes.png')}
                style={{
                  height: 36,
                  width: 68,

                  marginBottom: 10,
                  alignSelf: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                }}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  lineHeight: 16.8,
                  alignSelf: 'center',
                  textAlign: 'center',
                  fontFamily: 'Syne',
                  marginBottom: 5,
                }}>
                NaWee
              </Text>
            </ImageBackground>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#FF9F45',
        headerTintColor: 'white',
        drawerActiveTintColor: 'black',
        drawerInactiveBackgroundColor: '#FF9F45',

        drawerLabelStyle: {
          marginLeft: -14,
          fontFamily: 'Syne',
          color: 'white',
          fontSize: 14,
          borderRadius: 5,
          marginBottom: 2,
        },
      }}
      drawerContentOptions={{
        activeTintColor: 'red',
        activeBackgroundColor: 'grey',
        inactiveTintColor: 'blue',
        inactiveBackgroundColor: 'white',

        labelStyle: {
          fontFamily: 'Syne',
          color: 'white',
        },
      }}>
      <Drawer.Screen
        name="Profile"
        component={SettingScreen}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,
          },

          drawerIcon: ({focused, size}) => (
            <Image source={require('./Account.png')} style={{marginLeft: 22}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Wallet"
        component={Profile}
        options={{
          title: 'Wallet',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,
            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              size={22}
              color="#fff"
              style={{paddingLeft: 31}}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <Image source={require('./wallet.png')} style={{marginLeft: 22}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Route"
        component={DelayedDelivery}
        options={{
          title: 'Route',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,
          },

          drawerIcon: ({focused, size}) => (
            <Image source={require('./Route.png')} style={{marginLeft: 22}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Deliveries"
        component={DelayedDelivery}
        options={{
          title: 'Deliveries',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,
          },

          drawerIcon: ({focused, size}) => (
            <Image source={require('./Deli.png')} style={{marginLeft: 22}} />
          ),
        }}
      />
      <Drawer.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          title: 'FAQ',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,
          },

          drawerIcon: ({focused, size}) => (
            <Image source={require('./faq.png')} style={{marginLeft: 22}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: 'Log Out',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,
          },
          headerRight: () => (
            <View style={styles.headerRight}>
              <Fecon name="bell" size={20} color="#fff" borderColor="#fff" />
            </View>
          ),
          drawerIcon: ({focused, size}) => (
            <Image source={require('./logout.png')} style={{marginLeft: 22}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 24,

    opacity: 0.3,
  },
});
