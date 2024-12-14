import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { VStack, IconButton, Icon, useColorMode, useColorModeValue, View } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import PostGrid from '../components/PostGrid';
import ProfileHeader from '../components/ProfileHeader';
import ProfileStats from '../components/ProfileStats';
import ProfileButtons from '../components/ProfileButtons';

const ProfileScreen = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [followers, setFollowers] = useState(6929);

  const handleFollow = () => {
    setFollowers(followers + 1);
  };

  const backgroundColor = useColorModeValue(styles.lightBackground, styles.darkBackground);
  const textColor = useColorModeValue(styles.lightText, styles.darkText);

  return (
    <SafeAreaView style={[styles.safeArea, backgroundColor]}>
      <VStack flex={1} style={backgroundColor}>
        <View style={[styles.header, backgroundColor]}>
          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name={colorMode === 'light' ? 'moon' : 'sunny'}
                size="lg"
                color={colorMode === 'light' ? 'black' : 'yellow.300'}
              />
            }
            onPress={toggleColorMode}
            borderRadius="full"
            _pressed={{ bg: 'coolGray.200' }}
          />
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={styles.spacer} />
          <ProfileHeader textColor={textColor.color} />
          <ProfileStats followers={followers} textColor={textColor.color} />
          <ProfileButtons onFollow={handleFollow} textColor={textColor.color} />
          <PostGrid />
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  darkBackground: {
    backgroundColor: '#1a202c',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  header: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 0, // Kurangi padding atas menjadi 0
  },
  spacer: {
    height: 0, // Ubah tinggi spacer menjadi 0
  },
});


export default ProfileScreen;
