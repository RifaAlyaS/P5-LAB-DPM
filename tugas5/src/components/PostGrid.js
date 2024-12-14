import React from 'react';
import { FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorModeValue } from 'native-base';

const PostGrid = () => {
  const navigation = useNavigation();

  const posts = [
    { id: '1', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FecckjTum6RtOL92LQrctTo-bX4aT-yK7g&s' },
    { id: '2', uri: 'https://pbs.twimg.com/media/GaaSoIqWwAAdgYa.jpg' },
    { id: '3', uri: 'https://cdn.idntimes.com/content-images/community/2024/10/430301517-3770835019864702-7338418857344006152-n-2-82142b6c9315680b76e9eb04e91779f8-7aff97675de97a6b840cef42aa47af8d.jpg' },
    { id: '4', uri: 'https://cdn.idntimes.com/content-images/community/2024/10/39401515-1834861233263062-2980981515611013120-n-1-82142b6c9315680b76e9eb04e91779f8-f3137c7729dad1c9eab01193d7ec5c0f.jpg' },
    { id: '5', uri: 'https://i.pinimg.com/originals/66/3c/0a/663c0a755e761f90373f01edf651cec6.jpg' },
    { id: '6', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuPyofeXmbh7pzqjsVLyku41SQ7iJZ0C1ZA&s' },
  ];

  const numColumns = 3;
  const windowWidth = Dimensions.get('window').width;
  const imageSize = windowWidth / numColumns;

  const bgColor = useColorModeValue('#f9f9f9', '#333'); // Light: #f9f9f9, Dark: #333
  const borderColor = useColorModeValue('#ccc', '#444'); // Light: #ccc, Dark: #444

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.imageContainer, { backgroundColor: bgColor, borderColor: borderColor }]}
      onPress={() => navigation.navigate('PostDetail', { postUri: item.uri })}
    >
      <Image source={{ uri: item.uri }} style={[styles.image, { width: imageSize, height: imageSize }]} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      style={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    margin: 1,
    borderWidth: 1,
  },
  image: {
    resizeMode: 'cover',
  },
});

export default PostGrid;
