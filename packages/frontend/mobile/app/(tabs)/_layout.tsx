import React from 'react';
import { Tabs } from 'expo-router';
import { ThemeProvider, useTheme } from 'styled-components/native';
import { lightTheme } from '../../theme/theme';
import { IconContext } from 'phosphor-react-native';
import { BottomNavigationBar } from '@/components/BottomNavigationTab';

function ThemedTabs() {
  const theme = useTheme();

  return (
    <IconContext.Provider value={{
      size:   theme.iconSizes.large,
      color:  theme.palette.neutral[900],
      weight: 'regular',
    }}>
      <Tabs
        tabBar={() => (<BottomNavigationBar/>)}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Saved"
          options={{
            title: 'Saved',
            headerShown: false,
          }}
        />
      </Tabs>
    </IconContext.Provider>
  );
}

export default function TabLayout() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ThemedTabs />
    </ThemeProvider>
  );
}
