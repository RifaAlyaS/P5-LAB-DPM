import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useColorModeValue } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'; // Pastikan Anda telah menginstal react-native-vector-icons

const PostDetailScreen = ({ route }) => {
  const { postUri } = route.params;
  const [liked, setLiked] = useState(false);

  // Warna dinamis berdasarkan tema
  const backgroundColor = useColorModeValue('#fff', '#1a202c'); // Putih untuk mode terang, gelap untuk mode gelap
  const textColor = useColorModeValue('#333', '#fff'); // Teks hitam untuk mode terang, putih untuk mode gelap

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image source={{ uri: postUri }} style={styles.image} />
      <Text style={[styles.text, { color: textColor }]}>ini Akmal</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setLiked(!liked)}
        >
          <Icon
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "red" : textColor}
          />
          <Text style={[styles.iconText, { color: textColor }]}>Suka</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="chatbubble-outline" size={24} color={textColor} />
          <Text style={[styles.iconText, { color: textColor }]}>Komentar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="share-outline" size={24} color={textColor} />
          <Text style={[styles.iconText, { color: textColor }]}>Bagikan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default PostDetailScreen;
