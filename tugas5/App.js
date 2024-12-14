import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme, useColorModeValue } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './src/screens/ProfileScreen';
import PostDetailScreen from './src/screens/PostDetailScreen';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#f2e8ff',
      100: '#d8bdfc',
      200: '#be91fa',
      300: '#a465f8',
      400: '#8a3af5',
      500: '#ffffff', // Ubah ke warna putih
      600: '#f0f0f0',
      700: '#e0e0e0',
      800: '#d0d0d0',
      900: '#c0c0c0',
    },
  },
});

const Stack = createStackNavigator();

function AppNavigator() {
  // Warna header disesuaikan dengan tema gelap/terang
  const headerBackgroundColor = useColorModeValue('#ffffff', '#18202C'); // Tetap putih untuk mode terang & gelap
  const headerTextColor = useColorModeValue('#000000', '#ffffff'); // Warna teks hitam agar kontras

  return (
    <Stack.Navigator>
      {/* Halaman Profil */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerStyle: { backgroundColor: headerBackgroundColor }, // Warna putih
          headerTintColor: headerTextColor, // Warna teks hitam
        }}
      />

      {/* Halaman Detail Post */}
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{
          title: 'Post Detail',
          headerStyle: { backgroundColor: headerBackgroundColor },
          headerTintColor: headerTextColor,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
