import {
  icons,
} from 'lucide-react-native';
import { Tabs } from 'expo-router';
import Logo from '@/assets/images/Logo.svg';
import { useThemeColors } from '@/hooks/useThemeColors';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { DefaultStyles } from '@/constants/DefaultStyles';

const createScreenOptions = (title: string, iconName: keyof typeof icons): BottomTabNavigationOptions => {
  const LucideIcon = icons[iconName];

  return {
    title,
    tabBarIcon: ({ color }: { color: string }) => <LucideIcon size={28} color={color} />,
    tabBarLabelStyle: { ...DefaultStyles.tabBarLabelStyle },
  };
};

export default function TabLayout() {
  const { tabIconDefault, tabIconSelected, backgroundEmphasis } = useThemeColors();

  return (
    <Tabs
      screenOptions={{
        headerTitle: () => <Logo width={75} height={25} />,
        tabBarActiveTintColor: tabIconSelected,
        tabBarInactiveTintColor: tabIconDefault,
        headerTransparent: true,
        tabBarStyle: { backgroundColor: backgroundEmphasis },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen name='index' options={createScreenOptions('Explore', "TextSearch")} />
      <Tabs.Screen name='wishlist' options={createScreenOptions('Wishlist', "Heart")} />
      <Tabs.Screen name='settings' options={createScreenOptions('Settings', "Settings")} />
    </Tabs>
  );
}
