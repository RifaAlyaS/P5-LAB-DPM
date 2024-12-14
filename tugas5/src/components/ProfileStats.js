import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileStats = ({ followers, textColor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={[styles.value, { color: textColor }]}>6</Text>
        <Text style={[styles.label, { color: textColor }]}>Posts</Text>
      </View>
      <View style={styles.stat}>
        <Text style={[styles.value, { color: textColor }]}>{followers}</Text>
        <Text style={[styles.label, { color: textColor }]}>Followers</Text>
      </View>
      <View style={styles.stat}>
        <Text style={[styles.value, { color: textColor }]}>1,292</Text>
        <Text style={[styles.label, { color: textColor }]}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontSize: 12,
  },
});

export default ProfileStats;
