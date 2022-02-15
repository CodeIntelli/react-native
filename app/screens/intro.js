/* eslint-disable prettier/prettier */
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, {useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   StatusBar,
//   Dimensions,
// } from 'react-native';
// import RoundIconBtn from '../Componenet/RoundIconBtn';
// import colors from '../misc/colors';

// const Intro = ({onFinish}) => {
//   const [name, setName] = useState('');
//   const handleOnChangeText = text => setName(text);

//   const handleSubmit = async () => {
//     const user = {name: name};
//     await AsyncStorage.setItem('user', JSON.stringify(user));
//     if (onFinish) {
//       onFinish();
//     }
//   };

//   return (
//     <>
//       <StatusBar hidden />
//       <View style={styles.container}>
//         <Text style={styles.inputTitle}>Enter Your Name to Continue</Text>
//         <TextInput
//           value={name}
//           onChangeText={handleOnChangeText}
//           placeholder="Enter Name"
//           style={styles.textInput}
//         />
//         {name.trim().length >= 3 ? (
//           <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
//         ) : null}
//       </View>
//     </>
//   );
// };

// const width = Dimensions.get('window').width - 50;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textInput: {
//     borderWidth: 2,
//     borderColor: colors.PRIMARY,
//     color: colors.PRIMARY,
//     width,
//     height: 50,
//     borderRadius: 10,
//     paddingLeft: 15,
//     fontSize: 25,
//     marginBottom: 15,
//   },
//   inputTitle: {
//     alignSelf: 'flex-start',
//     paddingLeft: 25,
//     marginBottom: 5,
//     opacity: 0.5,
//   },
// });

// export default Intro;

import React from 'react';
// import Images from '../config/Images';
import {
  ButtonSolid,
  CircleImage,
  ScreenContainer,
  SwitchRow,
  TextField,
  withTheme,
} from '@draftbit/ui';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

const BasicProfileScreen = props => {
  const {theme} = props;
  console.log('app running successfully');
  const [Phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  let userData = [];

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'Phone') {
      setPhone(text);
    }
    if (valueFor === 'name') {
      setName(text);
    }
    if (valueFor === 'company') {
      setCompany(text);
    }
  };

  let submitData = async () => {
    console.log('button clicked');
    const time = new Date().getTime();
    const note = {
      id: Date.now(),
      Phone: Phone,
      name: name,
      company: company,
      createdAt: time,
    };
    console.log(note);
    // userData.push();
    await AsyncStorage.setItem('userData', JSON.stringify(note));
  };
  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewOI}
        enabled={true}
        behavior={'padding'}>
        <View style={styles.View_3d} pointerEvents={'auto'}>
          <Text style={[styles.Textbb, {color: theme.colors.strong}]}>
            {'Create Your Profile'}
          </Text>

          <Text style={[styles.Textkm, {color: theme.colors.medium}]}>
            {
              'Since this is your first time, we just need some basic information to get started. '
            }
          </Text>
          {/* <CircleImage
            style={styles.CircleImage_24}
            source={Images.Elliot}
            size={60}
          /> */}
        </View>

        <View pointerEvents={'auto'}>
          <TextField
            onChangeText={text => handleOnChangeText(text, 'name')}
            label={'Name'}
            // placeholder={'Name'}
            type={'underline'}
            value={name}
          />
          <TextField
            label={'Company Name'}
            onChangeText={text => handleOnChangeText(text, 'company')}
            // placeholder={'Company Name'}
            type={'underline'}
            value={company}
          />
          <TextField
            onChangeText={text => handleOnChangeText(text, 'Phone')}
            label={'Phone Number'}
            keyboardType="number-pad"
            // placeholder="Phone Number"
            type={'underline'}
            value={Phone}
          />
        </View>
        <Button
          title={'Add User'}
          onPress={() => submitData()}
          style={[
            styles.ButtonSolidQs,
            {backgroundColor: theme.colors.primary},
          ]}
        />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textbb: {
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Textkm: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 4,
  },
  CircleImage_24: {
    marginTop: 8,
  },
  View_3d: {
    alignItems: 'center',
  },
  SwitchRowQ3: {
    fontFamily: 'System',
    fontWeight: '400',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 4,
    fontSize: 16,
  },
  ButtonSolidQs: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'center',
  },
  KeyboardAvoidingViewOI: {
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(BasicProfileScreen);
