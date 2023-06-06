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
import {createStackNavigator} from '@react-navigation/stack';
import Guest from './src/Screens/CustomerGuest';

import Aicon from 'react-native-vector-icons/AntDesign';
import Ficon from 'react-native-vector-icons/Feather';
import Eicon from 'react-native-vector-icons/EvilIcons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  navigation,
} from '@react-navigation/drawer';
const Stack = createStackNavigator();

import Iicon from 'react-native-vector-icons/Ionicons';
import Home from './src/Screens/Home';
import Order from './src/Screens/Order';
import Faq from './src/Screens/Faq';
import Setting from './src/Screens/Setting';
import Profile from './src/Screens/Profile';
import Contact from './src/Screens/Contact';
import Wallet from './src/Screens/Wallet';
import TrackD from './src/Screens/TrackParcelDetails';
import SignIn from './src/Screens/SignIn';
import Fp from './src/Screens/ForgotPassword';
import Ol from './src/Screens/OdersLists';
import Ld from './src/Screens/LocationDetails';
import Cp from './src/Screens/ChooseParcel';
import Cu from './src/Screens/ChooseUsers';
import Od from './src/Screens/YourOrder';
import Os from './src/Screens/YourOrderStatus';
import Sm from './src/Screens/SendParcel';
import Difa from './src/Screens/DifferentAddress';
import Sera from './src/Screens/Search_Address';
import Dof from './src/Screens/DropOffbooth';
import MtoS from './src/Screens/MtoS';
import MtoSP from './src/Screens/MtoSParcel';
import MtoMP from './src/Screens/MtoMParcel';
import StoS from './src/Screens/StoS';
import MtoM from './src/Screens/MtoM';
import Login from './src/Screens/Login';
import Signup from './src/Screens/SignUp';
import Uo from './src/Screens/UpdateOrder';
import TrackIn from './src/Screens/TrackParcelInfo';
import Confirm from './src/Screens/PasswordConfirm';
import Notification from './src/Screens/Notification';
import Com1 from './src/Screens/Confirm';
import Com2 from './src/Screens/Confirm2';
import Can from './src/Screens/CancelledOrder';
import Can1 from './src/Screens/CancelledOrder2';

function FAQScreen() {
  return <Faq />;
}

function Logout() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Logout Screen</Text>
    </View>
  );
}
const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={({navigation, route}) => ({
          title: 'LOG IN',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Fp"
        component={Fp}
        options={{
          title: 'FORGOT PASSWORD',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: 'SIGN UP',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation, route}) => ({
          title: 'Home',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerLeft: () => (
            <Eicon
              name="navicon"
              color="#fff"
              size={26}
              style={{marginLeft: 31}}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Ficon
              name="bell"
              color="#fff"
              size={20}
              style={{marginRight: 24}}
              onPress={() => navigation.navigate('Notification')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Sm"
        component={Sm}
        options={{
          title: 'DETAILS',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Difa"
        component={Difa}
        options={{
          title: 'DETAILS',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Sera"
        component={Sera}
        options={{
          title: 'DETAILS',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Dof"
        component={Dof}
        options={{
          title: 'DETAILS',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="StoS"
        component={StoS}
        options={{
          title: 'DETAILS',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="MtoSP"
        component={MtoSP}
        options={{
          title: 'DETAILS',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="MtoS"
        component={MtoS}
        options={{
          title: 'DETAILS',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="MtoM"
        component={MtoM}
        options={{
          title: 'DETAILS',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="MtoMP"
        component={MtoMP}
        options={{
          title: 'DETAILS',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Com1"
        component={Com1}
        options={{
          title: 'Confirm',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Com2"
        component={Com2}
        options={{
          title: 'Confirm',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="TrackIn"
        component={TrackIn}
        options={{
          title: 'Track Parcel',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="TrackD"
        component={TrackD}
        options={{
          title: 'Track Parcel',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Od"
        component={Od}
        options={({navigation, route}) => ({
          title: 'Your orders',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Can"
        component={Can}
        options={({navigation, route}) => ({
          title: 'Cancelled Order',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Can1"
        component={Can1}
        options={({navigation, route}) => ({
          title: 'Cancelled Order',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />

      <Stack.Screen
        name="Os"
        component={Os}
        options={({navigation, route}) => ({
          title: 'Your orders',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={({navigation, route}) => ({
          title: 'Your orders',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Uo"
        component={Uo}
        options={({navigation, route}) => ({
          title: 'Your orders',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={({navigation, route}) => ({
          title: 'Account',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#fff'},
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Password Reset',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8832',
            marginTop: 15,

            elevation: 0,
          },
          headerBackImage: () => (
            <Aicon
              name="left"
              color="#fff"
              size={22}
              style={{marginLeft: 31}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FA8832'}}>
        <View style={{flex: 1, backgroundColor: '#FA8832', paddingTop: 15}}>
          <DrawerItemList {...props} />
        </View>

        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            marginTop: 120,
            backgroundColor: '#FA8832',
          }}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 2,
                alignItems: 'center',
                width: 208,
                height: 40,
                borderRadius: 5,
                borderColor: 'white',
                borderStyle: 'solid',
              }}>
              <Image
                source={require('./src/Screens/people.png')}
                style={{marginLeft: 36}}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  alignSelf: 'center',
                  textAlign: 'center',
                  paddingLeft: 10,
                  color: 'white',
                }}>
                Refer Someone
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Contact')}
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
                  paddingLeft: 10,
                  color: 'white',
                }}>
                Contact Us
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <ImageBackground style={{padding: 20, backgroundColor: '#FA8832'}}>
              <Image
                source={require('./src/Screens/yes.png')}
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

function MyDrawer({navigation}) {
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
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          headerRight: () => (
            <Ficon
              name="bell"
              color="#fff"
              size={20}
              style={{marginRight: 24}}
              onPress={() => navigation.navigate('Notification')}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./src/Screens/home.png')}
              style={{marginLeft: 22}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountStack}
        options={{
          headerShown: false,
          headerLeft: () => (
            <Aicon
              name="left"
              size={22}
              color="#fff"
              style={{marginLeft: 31}}
              onPress={() => navigation.navigate('Home')}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./src/Screens/Account.png')}
              style={{marginLeft: 22}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrderStack}
        options={{
          headerShown: false,
          headerLeft: () => (
            <Aicon
              name="left"
              size={22}
              color="#fff"
              style={{marginLeft: 31}}
              onPress={() => navigation.navigate('Home')}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./src/Screens/order.png')}
              style={{marginLeft: 22}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
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
              style={{marginLeft: 31}}
              onPress={() => navigation.navigate('Home')}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./src/Screens/wallet.png')}
              style={{marginLeft: 22}}
            />
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

            elevation: 0,
          },
          headerLeft: () => (
            <Aicon
              name="left"
              size={22}
              color="#fff"
              style={{marginLeft: 31}}
              onPress={() => navigation.navigate('Home')}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./src/Screens/faq.png')}
              style={{marginLeft: 22}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: 'LogOut',
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
              style={{marginLeft: 31}}
              onPress={() => navigation.navigate('Home')}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('./src/Screens/logout.png')}
              style={{marginLeft: 22}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Guest"
          component={Guest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginStack"
          component={LoginStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: 'Contact',
            headerTitleStyle: {
              color: '#fff',
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FA8832',
              marginTop: 15,

              elevation: 0,
            },
            headerBackImage: () => (
              <Aicon
                name="left"
                size={22}
                color="#fff"
                style={{marginLeft: 31}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            title: 'Notification',
            headerTitleStyle: {
              color: '#fff',
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FA8832',
              marginTop: 15,

              elevation: 0,
            },
            headerBackImage: () => (
              <Aicon
                name="left"
                size={22}
                color="#fff"
                style={{marginLeft: 31}}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({});
