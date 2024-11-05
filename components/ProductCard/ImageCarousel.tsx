import { FlatList, Image, useWindowDimensions } from 'react-native';

const ImageCarousel = ({
  pictures,
}: {
  pictures: { [key: string]: string };
}) => {
  const { width, height } = useWindowDimensions();
  return (
    <FlatList
      data={Object.values(pictures)}
      horizontal
      pagingEnabled
      snapToAlignment='center'
      decelerationRate='fast'
      style={{ width: width * 0.45, height: height * 0.3 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{ width: width * 0.45, height: height * 0.3 }}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ImageCarousel;
