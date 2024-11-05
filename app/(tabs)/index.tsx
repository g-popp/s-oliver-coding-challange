import { ProductCard } from '@/components/ProductCard';
import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import { View, FlatList, StyleSheet } from 'react-native';

const product: Product[] = [
  {
    id: 1,
    name: 'Knitted Jumper',
    detail: 'Knitted jumper with a crew neck',
    category: 'Oberteile',
    brand: 'QS by s.Oliver',
    price: 29.99,
    tags: { new: true, sustainable: true, premium: false },
    colorVariants: [
      {
        shoppingCart: false,
        wishList: false,
        color: {
          variant: 'LightGrey',
          group: 'Grey',
          value: '#bdbdbd',
        },
        pictures: {
          front: 'https://media.soliver.com/i/soliver/2141220.9730_front',
          flat: 'https://media.soliver.com/i/soliver/2141220.9730_flat',
          back: 'https://media.soliver.com/i/soliver/2141220.9730_back',
          outfit: 'https://media.soliver.com/i/soliver/2141220.9730_outfit',
        },
      },
      {
        wishList: false,
        shoppingCart: false,
        color: {
          variant: 'LightBrown',
          group: 'Brown',
          value: '#a1887f',
        },
        pictures: {
          front: 'https://media.soliver.com/i/soliver/2141220.83W0_front',
          flat: 'https://media.soliver.com/i/soliver/2141220.83W0_flat',
          back: 'https://media.soliver.com/i/soliver/2141220.83W0_back',
          outfit: 'https://media.soliver.com/i/soliver/2141220.83W0_outfit',
        },
      },
      {
        wishList: true,
        shoppingCart: false,
        color: {
          variant: 'RoyalBlue',
          group: 'Blue',
          value: '#1a237e',
        },
        pictures: {
          front: 'https://media.soliver.com/i/soliver/2141220.5884_front',
          flat: 'https://media.soliver.com/i/soliver/2141220.5884_flat',
          back: 'https://media.soliver.com/i/soliver/2141220.5884_back',
          outfit: 'https://media.soliver.com/i/soliver/2141220.5884_outfit',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'T-shirt',
    detail: 'T-shirt with an all-over print',
    category: 'Oberteile',
    brand: 'QS by s.Oliver',
    price: 19.99,
    tags: { new: true, sustainable: false, premium: false },
    colorVariants: [
      {
        wishList: false,
        shoppingCart: true,
        color: {
          variant: 'LightGreen',
          group: 'Green',
          value: '#aed581',
        },
        pictures: {
          front: 'https://media.soliver.com/i/soliver/2140283.73A0_front',
          flat: 'https://media.soliver.com/i/soliver/2140283.73A0_flat',
          back: 'https://media.soliver.com/i/soliver/2140283.73A0_back',
          outfit: 'https://media.soliver.com/i/soliver/2140283.73A0_outfit',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Cotton T-shirt',
    detail: 'Cotton T-shirt with a slub yarn texture',
    category: 'Oberteile',
    brand: 'QS by s.Oliver',
    price: 12.99,
    tags: { new: true, sustainable: true, premium: false },
    colorVariants: [
      {
        wishList: false,
        shoppingCart: false,
        color: {
          variant: 'White',
          group: 'White',
          value: '#ffffff',
        },
        pictures: {
          front: 'https://media.soliver.com/i/soliver/2141633.0100_front',
          flat: 'https://media.soliver.com/i/soliver/2141633.0100_flat',
          back: 'https://media.soliver.com/i/soliver/2141633.0100_back',
          outfit: 'https://media.soliver.com/i/soliver/2141633.0100_outfit',
        },
      },
      {
        wishList: false,
        shoppingCart: false,
        color: {
          variant: 'Black',
          group: 'Black',
          value: '#000000',
        },
        pictures: {
          front: 'https://media.soliver.com/i/soliver/2141633.9999_front',
          flat: 'https://media.soliver.com/i/soliver/2141633.9999_flat',
          back: 'https://media.soliver.com/i/soliver/2141633.9999_back',
          outfit: 'https://media.soliver.com/i/soliver/2141633.9999_outfit',
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Dress Shirt',
    detail: 'Slim fit: cotton blend dress shirt',
    category: 'Oberteile',
    brand: 's.Oliver BLACK LABEL',
    price: 49.99,
    tags: { new: true, sustainable: true, premium: true },
    colorVariants: [
      {
        wishList: true,
        shoppingCart: false,
        color: {
          variant: 'White',
          group: 'White',
          value: '#ffffff',
        },
        pictures: {
          front: 'https://media.soliver.com/i/soliver/2145478.0100_front',
          flat: 'https://media.soliver.com/i/soliver/2145478.0100_flat',
          back: 'https://media.soliver.com/i/soliver/2145478.0100_back',
          outfit: 'https://media.soliver.com/i/soliver/2145478.0100_outfit',
        },
      },
      {
        wishList: false,
        shoppingCart: false,
        color: {
          variant: 'RoyalBlue',
          group: 'Blue',
          value: '#1a237e',
        },
        pictures: {
          front: 'https://media.soliver.com/i/soliver/2145478.5978_front',
          flat: 'https://media.soliver.com/i/soliver/2145478.5978_flat',
          back: 'https://media.soliver.com/i/soliver/2145478.5978_back',
          outfit: 'https://media.soliver.com/i/soliver/2145478.5978_outfit',
        },
      },
    ],
  },
];

export default function Tab() {
  const { background } = useThemeColors();

  const renderItem = ({ item }: any) => (
    <ProductCard
      name={item.name}
      price={item.price}
      id={item.id}
      tags={item.tags}
      colorVariants={item.colorVariants}
    />
  );

  return (
    <View style={[DefaultStyles.safeArea, { backgroundColor: background }]}>
      <FlatList
        data={product.slice(0, 4)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      />
    </View>
  );
}
