import React from "react";
import { Tabs } from "expo-router";
import { ThemeProvider, useTheme } from "styled-components/native";
import { lightTheme } from "../../theme/theme";
import { IconContext } from "phosphor-react-native";
import { BottomNavigationBar } from "@/components/BottomNavigationTab";
import {
  CustomTabScreenOptions,
} from "@/components/BottomNavigationTab";

type pageData = {
  pageName: string;
} & CustomTabScreenOptions;

const pagesData: pageData[] = [
  {
    pageName: "index",
    nonFocusedIcon: { iconName: "House", weight: "regular" },
    focusedIcon: { iconName: "House", weight: "fill" },
  },
  {
    pageName: "Search",
    nonFocusedIcon: { iconName: "MagnifyingGlass", weight: "regular" },
    focusedIcon: { iconName: "MagnifyingGlass", weight: "fill" },
  },
  {
    pageName: "Discover",
    nonFocusedIcon: { iconName: "Compass", weight: "regular" },
    focusedIcon: { iconName: "Compass", weight: "fill" },
  },
  {
    pageName: "Saved",
    nonFocusedIcon: { iconName: "BookmarkSimple", weight: "regular" },
    focusedIcon: { iconName: "BookmarkSimple", weight: "fill" },
  },
  {
    pageName: "Profile",
    nonFocusedIcon: { iconName: "User", weight: "regular" },
    focusedIcon: { iconName: "User", weight: "fill" },
  },
];

function ThemedTabs() {
  const theme = useTheme();

  return (
    <IconContext.Provider
      value={{
        size: theme.iconSizes.large,
        color: theme.palette.neutral[900],
        weight: "regular",
      }}
    >
      <Tabs
        tabBar={(props) => <BottomNavigationBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        {pagesData.map(({ pageName, nonFocusedIcon, focusedIcon }) => (
          <Tabs.Screen
            name={pageName}
            options={
              {
                nonFocusedIcon,
                focusedIcon,
              } as CustomTabScreenOptions
            }
          />
        ))}
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
