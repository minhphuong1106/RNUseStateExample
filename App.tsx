/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useState} from 'react';
 import {
   Alert,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 import CustomInput from './src/CustomInput';
 import CustomButton from './src/CustomButton';
 import ForgotPassword from './src/ForgotPassword';
 
 export const orangeColor = '#E7421B';
 
 const App = () => {
   const [name, setName] = useState<string>('');
   const [mail, setMail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [retypePassword, setRetypePassword] = useState<string>('');
 
   const InputList = [
    {
      title: 'Name',
      placeholder: 'John Doe',
      belowTitle: '',
      changeText: setName,
      value: name,
    },
    {
      title: 'Mail',
      placeholder: 'adb@gmail.com',
      isShowBelowTitle: true,
      belowTitle: 'Register with phone number',
      changeText: setMail,
      value: mail,
    },
    {
      title: 'Password',
      placeholder: '*****',
      belowTitle: '',
      changeText: setPassword,
      value: password,
    },
    {
      title: 'RetypePassword',
      placeholder: '*****',
      belowTitle: '',
      changeText: setRetypePassword,
      value: retypePassword,
    }
  ];
 
   const signUp = (label: string) => {
     Alert.alert(label);
   };
 
   const login = (label: string) => {
     Alert.alert(`xin chào ${name}`);
   };
 
   return (
     <SafeAreaView style={{backgroundColor: 'white'}}>
       <View style={{marginTop: 50}}>
         <Text
           style={{
             textAlign: 'center',
             color: orangeColor,
             fontSize: 22,
             fontWeight: 'bold',
           }}>
           Join Active Ecommerce
         </Text>
         <View style={{margin: 20}}>
           {InputList.map((input, index) => (
             <CustomInput key={index}
             label={input.title}
             placeholder={input.placeholder}
             isShowBelowTitle={input.isShowBelowTitle}
             changeText={input.changeText}
             belowTitle={input.belowTitle}
             value={input.value}
             />
           ))}
           <CustomButton
             label={'SignUp'}
             colorCode={orangeColor}
             onPress={signUp}
           />
           <CustomButton label={'Login'} colorCode={'#F8B55D'} onPress={login} />

           <ForgotPassword>
             <TouchableOpacity
               onPress={() => {
                 setName('');
                 setPassword('');
                 setMail('');
                 setRetypePassword('');
               }}>
               <Text style={{color: 'green', fontWeight: 'bold'}}>
                 Reset Form
               </Text>
             </TouchableOpacity>
           </ForgotPassword>
           
           <ForgotPassword>
             <Text style={{color: 'white', fontWeight: 'bold'}}>
               Reset password
             </Text>
           </ForgotPassword>
           
           <Text>tên: {name}</Text>
           <Text>mail: {mail}</Text>
           <Text>password: {password}</Text>
           <Text>retypePassword: {retypePassword}</Text>
         </View>
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({});
 
 export default App;
 