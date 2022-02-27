import { Image, TouchableOpacity, TextInput, Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import useStyles from '../Styles';
import Footer from '../footer';
import { Formik } from 'formik';
import * as yup from 'yup';

const ProfileScreen = ({ navigation }) => {
  
  const { styles } = useStyles()

  const ValidationSchema = yup.object({
    username: yup.string()
              .min(4)
              .required()
              .max(25),
    password: yup.string()
              .required()
              .min(8),
    email: yup.string()
              .required()
              .email()
  })

  const runPost = (data)=>{
                  fetch('https://drizzle.pythonanywhere.com/', {
                    method: "POST",
                    headers: {
                      Accept: 'application/json, text/plain, */*',
                      'Content-Type': 'application/json',
                      // 'X-CSRFToken': csrftoken,
                    },
                    body: JSON.stringify(data),
                  })
                  .catch((error)=>{
                    console.log(`Error with fetch request:  ${error.message}`);
                  })
                };

  return ( 
      <View style={ styles.html }>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior={'position'}>
            <ScrollView contentContainerStyle={ styles.scrollHtml }>
              <View>
                <Text style={ styles.h1 }>Signin</Text>
              </View>
              <Formik
                initialValues={{ 
                  username: '', 
                  password: '', 
                  email: ''
                }}
                validationSchema={ValidationSchema}
                onSubmit={(values, actions)=>{

                  const data = {
                    "username": values.username,
                    "password": values.password,
                    "email": values.email,
                  };

                  console.log(data.username);

                  runPost(data);

                  actions.resetForm();
                }}
              >
                {(props)=>{
                  return(
                    <View style={ styles.createUserView }>
                      <Text style={ styles.errorTextColor }>{ props.touched.username && props.errors.username }</Text>
                      <View style={ styles.flexRow }>
                        <Image source={require('../assets/user.png')} style={ styles.icons }/>
                        <TextInput 
                          placeholder='Username'
                          style={ styles.textInput}
                          textContentType='username'
                          onChangeText={props.handleChange('username')}
                          value={props.values.username}
                        />
                      </View>
                      <Text style={ styles.errorTextColor }>{ props.touched.password && props.errors.password }</Text>
                      <View style={ styles.flexRow }>
                        <Image source={require('../assets/password.png')} style={ styles.icons }/>
                        <TextInput 
                          placeholder='Password'
                          style={ styles.textInput }
                          textContentType='password'
                          secureTextEntry={true}
                          onChangeText={props.handleChange('password')}
                          value={props.values.password}
                        />
                      </View>
                      <Text style={ styles.errorTextColor }>{ props.touched.email && props.errors.email }</Text>
                      <View style={ styles.flexRow }>
                        <Image source={require('../assets/mail.png')} style={ styles.emailIcon }/>
                        <TextInput 
                          placeholder='Email'
                          style={ styles.textInput }
                          textContentType='emailAddress'
                          keyboardType='email-address'
                          onChangeText={props.handleChange('email')}
                          value={props.values.email}
                        />
                      </View>
                      <TouchableOpacity onPress={props.handleSubmit}>
                        <View style={ styles.buttonView }>
                          <Text style={ styles.button }>Submit</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              </Formik>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        
        <Footer navigation={navigation}/>
        
      </View>
    );
}
 
export default ProfileScreen;