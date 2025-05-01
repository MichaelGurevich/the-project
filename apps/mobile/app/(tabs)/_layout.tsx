import React from "react";
import { Tabs } from "expo-router";

import {
  BottomTabBar,
  BottomTabsIconsData,
} from "../../components/BottomTabsBar";
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "@/theme/theme";

const TAB_BAR_ICONS_PATH = '@/icons/BottomNavBarIcons/'

const data: BottomTabsIconsData[] = [
  {
    pageName: "index",
    iconSource: require(TAB_BAR_ICONS_PATH + "tab-icon-home-outline-black.png"),
    focusedIconSource: require(TAB_BAR_ICONS_PATH + "tab-icon-home-filled-turquoise.png"),
  },
  {
    pageName: "Search",
    iconSource: require(TAB_BAR_ICONS_PATH + "tab-icon-search-outline-black.png"),
    focusedIconSource: require( TAB_BAR_ICONS_PATH +  "tab-icon-search-filled-turquoise.png"),
  },
  {
    pageName: "Discover",
    iconSource: require(TAB_BAR_ICONS_PATH + "tab-icon-compass-outline-black.png"),
    focusedIconSource: require(TAB_BAR_ICONS_PATH + "tab-icon-compass-filled-turquoise.png"),
  },
  {
    pageName: "Saved",
    iconSource: require(TAB_BAR_ICONS_PATH + "tab-icon-bookmark-outline-black.png"),
    focusedIconSource: require(TAB_BAR_ICONS_PATH + "tab-icon-bookmark-filled-turquoise.png"),
  },

  {
    pageName: "Profile",
    iconSource: require(TAB_BAR_ICONS_PATH + "tab-icon-profile-outline-black.png"),
    focusedIconSource: require(TAB_BAR_ICONS_PATH + "tab-icon-profile-filled-turquoise.png"),
  },
];

export default function TabLayout() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        tabBar={(props) => <BottomTabBar {...props} iconsData={data} />}
      >
        <Tabs.Screen name="index" />

        <Tabs.Screen name="Search" />

        <Tabs.Screen name="Discover" />

        <Tabs.Screen name="Saved" />

        <Tabs.Screen name="Profile" />
      </Tabs>
    </ThemeProvider>
  );
}
