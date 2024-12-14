import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader = ({ textColor }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://pbs.twimg.com/media/GTQtinZaYAIwp4p.jpg',
        }}
        style={styles.profileImage}
      />
      <View style={styles.infoContainer}>
        <Text style={[styles.username, { color: textColor }]}>kucingakmal</Text>
        <Text style={[styles.description, { color: textColor }]}>U I I Ai O Uu Ii A I</Text>
        <Text style={[styles.organization, { color: textColor }]}>Pecinta Akmal</Text>
        <Text style={[styles.bio, { color: textColor }]}>Yang follow ikut muter-muter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,          
    borderColor: '#000000',  
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginVertical: 2,
  },
  organization: {
    fontStyle: 'italic',
  },
  bio: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default ProfileHeader;
