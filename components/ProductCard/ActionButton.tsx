import { icons } from 'lucide-react-native';
import { ColorValue, StyleSheet, TouchableOpacity } from 'react-native';

type ActionButtonProps = {
  iconName: keyof typeof icons;
  iconColor: ColorValue;
  backgroundColor: ColorValue;
  isSelected: boolean;
};

export const ActionButton = ({
  iconName,
  iconColor,
  backgroundColor,
  isSelected,
}: ActionButtonProps) => {
  const LucideIcon = icons[iconName];
  const selectedBackgroundColor = isSelected ? iconColor : backgroundColor;
  const selectedIconColor = !isSelected ? iconColor : backgroundColor;

  return (
    <TouchableOpacity
      style={[
        styles.actionButton,
        styles.shadow,
        { backgroundColor: selectedBackgroundColor },
      ]}
    >
      <LucideIcon size={14} color={selectedIconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
});
