import { FlatList, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';

const blurhash = 'T6PjJm~qoY-;Rjaxt0IUxvaxj[t8';

const ImageCarousel = ({
  pictures,
}: {
  pictures: { [key: string]: string };
}) => {
  const { width, height } = useWindowDimensions();
  const imageStyle = { width: width * 0.45, height: height * 0.3 };

  return (
    <FlatList
      data={Object.values(pictures)}
      horizontal
      pagingEnabled
      snapToAlignment='center'
      decelerationRate='fast'
      style={imageStyle}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={imageStyle}
          contentFit='cover'
          placeholder={{ blurhash }}
          transition={350}
        />
      )}
      keyExtractor={(index) => index.toString()}
    />
  );
};

export default ImageCarousel;
