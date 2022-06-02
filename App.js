import {View} from 'react-native';
import React, {useState} from 'react';
// import CustomButton from './src/Components/components/CustomButton';
// import CustomTextInput from './src/Components/components/CustomTextInput';
// import GradientButton from './src/Components/components/GradientButton';
// import SwitchTab from './src/Components/components/SwitchTab';
// import CustomDropdown from './src/Components/CustomDropdown';
// import ProcessBar from './src/Components/components/ProcessBar';
// import LogoHeader from './src/Components/LogoHeader';
// import LogoHeader from './src/Components/LogoHeader';
// import SignIn from './src/Screens/SignIn';
// import Logo from './src/Components/LogoHeader';
// import EmergencyConatct from './src/Screens/EmergencyContact';
// import BasicInfo from './src/Screens/BasicInformation';
import SignUp from './src/Screens/SignUp';
const App = () => {
  // const [activeTab, setactiveTab] = useState('Booth');
  // const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <View style={{backgroundColor: 'white'}}>
      <SignUp />
      {/* <BasicInfo /> */}
      {/* <EmergencyConatct /> */}
      {/* <SignIn /> */}
      {/* <Logo /> */}
      {/* <LogoHeader /> */}
      {/* <CustomTextInput
        placeholder="Email"
        iconName="email"
        iconSize={23}
        bgcolor="#fca15a"
        iconcolor="#fff"
        onChange={val => console.log(val)}
        visible={true}
      />
      <CustomTextInput
        placeholder="Password"
        iconName="key"
        iconSize={23}
        bgcolor="#fca15a"
        iconcolor="#fff"
        onChange={val => console.log(val)}
        visible={false}
      />
      <CustomButton
        name="LOG IN"
        bgcolor="#fff"
        fontcolor="black"
        bordercolor="white"
        width={250}
        onPress={test => console.log(test)}
      />
      <GradientButton name="SIGN UP" onPress={test => console.log(test)} /> */}
      {/* <SwitchTab activeTab={activeTab} setactiveTab={setactiveTab} /> */}
      {/* <CustomDropdown
        placeholder="Select Country"
        itemlist={countries}
        inputicon="location"
        onPress={item => console.log(item)}
      /> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <TouchableOpacity style={styles.btn}>
//           <View style={styles.textCard}>
//             <View style={styles.iconCard}></View>
//             <View>
//               <Text>Booth</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     paddingHorizontal: 10,
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   card: {
//     height: '18%',
//     width: '75%',
//     borderWidth: 1,
//     borderRadius: 15,
//     flexDirection: 'column',
//   },
//   iconCard: {
//     height: '99%',
//     width: '30%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     marginLeft: 0.2,
//   },
//   textCard: {
//     width: '30%',
//     height: '100%',
//     borderWidth: 1,
//     borderColor: 'red',
//     borderRadius: 15,
//   },
//   btn: {
//     height: '18%',
//     width: '95%',
//     // backgroundColor: res.color.orageBackgroundColor,
//     alignSelf: 'center',
//     marginTop: '20%',
//     borderRadius: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });
