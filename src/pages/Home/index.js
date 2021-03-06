import React from 'react';
import { Button } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';


GoogleSignin.configure({
  webClientId: '',
});



export default function Home() {
  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
  );
}

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

