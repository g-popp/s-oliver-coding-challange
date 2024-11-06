import { getArticles } from '@/api/articles';
import { ProductCard } from '@/components/ProductCard';
import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

export default function Tab() {
  const { background } = useThemeColors();

  const { data, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

  const renderItem = ({ item: product }: { item: Product }) => (
    <ProductCard
      name={product.name}
      price={product.price}
      id={product.id}
      tags={product.tags}
      colorVariants={product.colorVariants}
    />
  );

  return (
    <View style={[DefaultStyles.safeArea, { backgroundColor: background }]}>
      {isLoading ? (
        <View style={{ ...DefaultStyles.container }}>
          <ActivityIndicator size={'small'} />
        </View>
      ) : null}

      {data ? (
        <FlashList
          data={data || []}
          renderItem={renderItem}
          keyExtractor={(product) => product.id.toString()}
          numColumns={2}
          estimatedItemSize={30}
        />
      ) : null}
    </View>
  );
}
