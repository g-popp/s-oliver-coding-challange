import { Heart, Settings, TextSearch } from 'lucide-react-native';
import { Tabs } from 'expo-router';
import Logo from '@/assets/images/Logo.svg';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FC0000',
        headerTitle: () => <Logo width={70} height={50} />,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <TextSearch size={28} color={color} />,
          tabBarLabelStyle: { fontFamily: 'Helvetica Neue' },
        }}
      />
      <Tabs.Screen
        name='wishlist'
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color }) => <Heart size={28} color={color} />,
          tabBarLabelStyle: { fontFamily: 'Helvetica Neue' },
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Settings size={28} color={color} />,
          tabBarLabelStyle: { fontFamily: 'Helvetica Neue' },
        }}
      />
    </Tabs>
  );
}
