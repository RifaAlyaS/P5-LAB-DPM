import React from 'react';
import { View, Button, StyleSheet, useColorScheme } from 'react-native';

const ProfileButtons = ({ onFollow }) => {
  const colorScheme = useColorScheme(); // Mendapatkan tema (light atau dark)
  
  const isDarkMode = colorScheme === 'dark';
  const buttonColor = isDarkMode ? '#FFFFFF' : '#A9A9A9'; // Putih untuk mode gelap, abu-abu untuk mode terang

  return (
    <View style={styles.container}>
      <Button title="Follow" color={buttonColor} onPress={onFollow} />
      <Button title="Message" color={buttonColor} />
      <Button title="Contact" color={buttonColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
});

export default ProfileButtons;
