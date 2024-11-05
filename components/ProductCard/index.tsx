import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import ImageCarousel from './ImageCarousel';
import ColorCircle from './ColorCircle';
import { SustainableBadge } from './SustainableBadge';
import { ActionButton } from './ActionButton';

type ProductCardProps = {
  id: Product['id'];
  name: Product['name'];
  price: Product['price'];
  tags: Product['tags'];
  colorVariants: Product['colorVariants'];
};

export const ProductCard = ({
  id,
  name,
  price,
  tags,
  colorVariants,
}: ProductCardProps) => {
  const {
    text,
    actionButtonBackground,
    actionButtonDefaultIcon,
    tabIconSelected,
  } = useThemeColors();
  const [selectedVariant, setSelectedVariant] = useState(0);

  const pictures = colorVariants[selectedVariant].pictures;

  return (
    <View key={id} style={styles.productCard}>
      <View style={styles.actionButtonsContainer}>
        <ActionButton
          iconName='Heart'
          backgroundColor={actionButtonBackground}
          iconColor={tabIconSelected}
          isSelected={colorVariants[selectedVariant].wishList}
        />
        <ActionButton
          iconName='ShoppingBag'
          backgroundColor={actionButtonBackground}
          iconColor={actionButtonDefaultIcon}
          isSelected={colorVariants[selectedVariant].shoppingCart}
        />
      </View>
      {tags.sustainable ? <SustainableBadge /> : null}
      <ImageCarousel pictures={pictures} />
      <Text style={{ ...DefaultStyles.text, color: text }}>{name}</Text>
      <Text style={{ ...DefaultStyles.text, color: text }}>{price} €</Text>
      <View style={{ flexDirection: 'row', gap: 2 }}>
        {colorVariants.map((colorVariant, index) => (
          <ColorCircle
            key={index}
            color={colorVariant.color.value}
            selected={index === selectedVariant}
            selectedColor={text}
            onPress={() => setSelectedVariant(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    margin: 8,
    position: 'relative',
  },
  actionButtonsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    flexDirection: 'column',
    gap: 10,
  },
});
