import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import {useState, useEffect} from 'react';
// import {Auth} from '../API/Service';

import FooterLogin from '../Components/FooterLogin';

const SignIn = () => {
  const [SigninForm, setSigninForm] = useState({
    email: {text: '', error: '', type: 'TEXT'},
    password: {text: '', error: '', type: 'TEXT'},
  });

  const [loading, setloading] = useState(false);

  const inputValidationHandler = (key, value) => {
    let error = '';
    const validMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    // const validPass = /^[A-Za-z]\w{7,14}$/;

    if (key === 'email') {
      if (!validMail.test(value)) {
        error = 'Invalid Email';
      }
    } else if (key === 'password') {
      if (value.length < 8) {
        error = 'Minimum length should be 8';
      } else if (value.length > 20) {
        error = 'Maximun length should be 20';
      }
      //   if (!validPass.test(value)) {
      //     error = 'Invalid Password';
      //   }
    }
    return error;
  };

  const signinInputHandler = (key, value) => {
    let x = {...SigninForm};
    x[key]['text'] = value;

    x[key]['error'] = inputValidationHandler(key, value);

    setSigninForm(x);
  };

  const extractInputData = () => {
    let data = {};
    for (const [mainkey, mainvalue] of Object.entries(SigninForm)) {
      data[mainkey] = mainvalue.text;
    }
    return data;
  };

  const submitInputHandler = async () => {
    try {
      let error = '';
      let x = {...SigninForm};
      for (const [mainkey, mainvalue] of Object.entries(SigninForm)) {
        // console.log(mainkey, mainvalue);
        if (mainvalue.text.length === 0) {
          error = 'All fields are required';
          x[mainkey]['error'] = `${mainkey} is required`;
        } else if (mainvalue.error.length !== 0) {
          error = '';
        }
      }
      setSigninForm(x);
      if (error.length !== 0) {
        throw Error(error);
      }
      setloading(true);
      const response = await signInPerson();
      setloading(false);
      // console.log(response);
      const data = extractInputData();
      console.log('data', data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    console.log('SigninForm', SigninForm);
  }, [SigninForm]);

  const signInPerson = async () => {
    try {
      const data = extractInputData();
      const response = await Auth.signIn(data);
      console.log('Sign in Person : ', response);
      if (response.status !== 200) {
        throw Error(response);
      } else if (response.status === 200) {
        console.log('Sign In Successful');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <View style={styles.signInContainer}>
        <View>
          <CustomTextInput
            lable="Email Id"
            bgcolor="white"
            visible={true}
            onChange={text => signinInputHandler('email', text)}
            value={SigninForm.email.text}
          />
          {SigninForm.email.error ? (
            <Text style={styles.error}>{SigninForm.email.error}</Text>
          ) : null}
          <CustomTextInput
            lable="Password"
            bgcolor="white"
            visible={false}
            onChange={passText => signinInputHandler('password', passText)}
            value={SigninForm.password.text}
          />
          {SigninForm.password.error ? (
            <Text style={styles.error}>{SigninForm.password.error}</Text>
          ) : null}
        </View>
        <View style={styles.forgotPassContainer}>
          <Text style={styles.forgotPassContainerText}>Forgot Password?</Text>
        </View>
        <CustomButton
          name="Log in"
          bgcolor="#fa8832"
          width={220}
          fontcolor="white"
          onPress={() => submitInputHandler()}
        />
        <View styles={styles.footerLogin}>
          <FooterLogin
            footertext="Don't have an account"
            footerbtntext="Sign Up"
          />
        </View>
        {/* <Logo /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  signInContainer: {
    marginTop: 100,
  },
  footerLogin: {},
  error: {
    color: 'red',
    marginHorizontal: 50,
    fontWeight: '700',
    fontSize: 12,
    paddingTop: 22,
  },
  forgotPassContainer: {
    marginTop: 24,
    marginLeft: '62%',
  },
  forgotPassContainerText: {
    color: '#FA8832',
  },
});
export default SignIn;
