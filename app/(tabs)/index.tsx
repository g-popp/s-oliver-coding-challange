import { useState } from 'react';
import { getArticles } from '@/api/articles';
import { ProductCard } from '@/components/ProductCard';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { FilterButton } from '@/components/FilterButton';

export default function Tab() {
  const { background, text } = useThemeColors();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

  const filteredData = data?.filter(
    (product: { name: string; brand: string }) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <View
          style={{
            flex: 0.8,
          }}
        >
          <ThemedTextInput
            placeholder='Search...'
            value={searchQuery}
            onChangeText={setSearchQuery}
            iconName='Search'
          />
        </View>

        <FilterButton />
      </View>
      {isLoading ? (
        <View style={{ ...DefaultStyles.container }}>
          <ActivityIndicator size={'small'} color={text} />
        </View>
      ) : null}

      {filteredData ? (
        <FlashList
          data={filteredData || []}
          renderItem={renderItem}
          keyExtractor={(product) => product.id.toString()}
          numColumns={2}
          estimatedItemSize={30}
        />
      ) : null}
    </View>
  );
}
