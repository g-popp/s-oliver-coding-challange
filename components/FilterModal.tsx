import { DefaultStyles } from '@/constants/DefaultStyles';
import { useThemeColors } from '@/hooks/useThemeColors';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { forwardRef, useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const FilterModal = forwardRef<BottomSheetModal>((props, ref) => {
  const { text, background } = useThemeColors();

  const snapPoints = useMemo(() => ['70%'], []);
  const { dismiss } = useBottomSheetModal();
  const { bottom } = useSafeAreaInsets();

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        opacity={0.5}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
        onPress={dismiss}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: text }}
      backgroundStyle={{ backgroundColor: background }}
    >
      <View style={DefaultStyles.container}>
        <Text style={{ ...DefaultStyles.text, color: text }}>Filter</Text>
      </View>
    </BottomSheetModal>
  );
});
