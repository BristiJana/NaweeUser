import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import FooterLogin from '../Components/FooterLogin';
import CustomTextInput from '../Components/CustomTextInput';
import CustomText from '../Components/CustomText';
import CustomDropdown from '../Components/CustomDropdown';
import CustomButton from '../Components/CustomButton';
import {Auth} from '../API/Service';

export default function SignUp() {
  const [details, setdetails] = useState({
    email: {text: '', error: ''},
    password: {text: '', error: ''},
    phoneNumber: {text: '', error: ''},
    firstName: {text: '', error: ''},
    lastName: {text: '', error: ''},
    middleName: {text: '', error: ''},
    sex: {text: '', error: ''},
    address: {text: '', error: ''},
    hearFrom: {text: '', error: ''},
  });

  const [loading, setloading] = useState(false);

  const handleValidation = (key, value) => {
    let error = '';
    if (key === 'email') {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
        error = 'Invalid email';
      }
    } else if (key === 'password') {
      if (value.length < 8) {
        error = 'Password must be at least 6 characters';
      }
    } else if (key === 'phoneNumber') {
      if (!/^[0-9]{10}$/g.test(value)) {
        error = 'Invalid phone number';
      }
    }
    return error;
  };

  const handleInputSignup = (key, values) => {
    let x = {...details};
    x[key]['text'] = values;
    x[key]['error'] = handleValidation(key, values);
    setdetails(x);
  };

  useEffect(() => {
    console.log(details);
  }, [details]);

  const handleSubmit = async () => {
    try {
      let error = '';
      let x = {...details};
      for (const [mainkey, mainvalue] of Object.entries(details)) {
        console.log(mainkey, mainvalue);
        if (mainvalue.text.length === 0) {
          error = 'All fields are required';
          x[mainkey]['error'] = `${mainkey} is required`;
        } else if (mainvalue.error.length !== 0) {
          error = '';
        }
      }
      setdetails(x);
      if (error.length !== 0) {
        throw Error(error);
      }
      setloading(true);
      const response = await postUser();
      setloading(false);
    } catch (error) {
      setloading(false);
      alert(error.message);
    }
  };

  const extractData = () => {
    let data = {};
    for (const [key, value] of Object.entries(details)) {
      data[key] = value.text;
    }
    return data;
  };

  const postUser = async () => {
    try {
      const data = extractData();
      const response = await Auth.signUp(data);
      console.log('Post user : ', response);
      if (response.status !== 200) {
        throw Error(response);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{height: 1235}}>
      <CustomText text="PERSONAL INFORMATION" size={23} color="#ffffff" />
      <CustomTextInput
        lable="FIRST NAME"
        bgcolor="#fff"
        values={details.firstName.text}
        onChange={val => handleInputSignup('firstName', val)}
        visible={true}
      />
      <CustomTextInput
        lable="MIDDLE NAME"
        iconName="person"
        iconSize={20}
        bgcolor="#fff"
        iconcolor="#fff"
        values={details.middleName.text}
        onChange={val => handleInputSignup('middleName', val)}
        visible={true}
      />
      <CustomTextInput
        lable="LAST NAME"
        iconName="person"
        iconSize={20}
        bgcolor="#fff"
        values={details.lastName.text}
        iconcolor="#fff"
        onChange={val => handleInputSignup('lastName', val)}
        visible={true}
      />
      <CustomTextInput
        lable="EMAIL"
        iconName="email"
        iconSize={20}
        bgcolor="#fff"
        iconcolor="#fff"
        values={details.email.text}
        onChange={val => handleInputSignup('email', val)}
        visible={true}
      />
      {details.email.error ? (
        <Text style={styles.error}>{details.email.error}</Text>
      ) : null}
      <CustomTextInput
        lable="PASSWORD"
        iconName="locked"
        iconSize={20}
        bgcolor="#fff"
        values={details.password.text}
        onChange={val => handleInputSignup('password', val)}
        visible={false}
      />
      {details.password.error ? (
        <Text style={styles.error}>{details.password.error}</Text>
      ) : null}
      <CustomTextInput
        lable="PHONE"
        bgcolor="#fff"
        values={details.phoneNumber.text}
        onChange={val => handleInputSignup('phoneNumber', val)}
        visible={true}
      />
      {details.phoneNumber.error ? (
        <Text style={styles.error}>{details.phoneNumber.error}</Text>
      ) : null}
      <CustomDropdown
        placeholder="GENDER"
        itemlist={['male', 'female', 'non-binary']}
        inputicon="transgender"
        onPress={item => handleInputSignup('sex', item)}
        iconcolor="#fff"
      />
      <CustomTextInput
        lable="ADDRESS"
        bgcolor="#fff"
        values={details.address.text}
        onChange={val => handleInputSignup('address', val)}
        visible={true}
        toggleicon={true}
      />
      <CustomDropdown
        placeholder="HOW DID YOU HEAR ABOUT US"
        itemlist={['Facebook', 'Youtube']}
        onPress={item => handleInputSignup('hearFrom', item)}
      />
      <CustomButton
        name="SIGN UP"
        bgcolor="#fa8832"
        width={230}
        onPress={test => handleSubmit()}
      />
      <FooterLogin footertext="Already have an account" footerbtntext="login" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginHorizontal: 50,
    fontWeight: '700',
    fontSize: 12,
    paddingTop: 40,
  },
});
