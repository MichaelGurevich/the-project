import React from "react";
import { Tabs } from "expo-router";
import { ThemeProvider, useTheme } from "styled-components/native";
import { lightTheme } from "../../theme/theme";
import { IconContext } from "phosphor-react-native";
import { BottomNavigationBar } from "@/components/BottomNavigationTab";
import { CustomTabScreenOptions } from "@/components/BottomNavigationTab";

const pagesData = [
  { pageName: "index", iconName: "House" },
  { pageName: "Search", iconName: "MagnifyingGlass" },
  { pageName: "Discover", iconName: "Compass" },
  { pageName: "Saved", iconName: "BookmarkSimple" },
  { pageName: "Profile", iconName: "User" },
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
      <Tabs tabBar={(props) => <BottomNavigationBar {...props} />}>
        {pagesData.map(({ pageName, iconName }) => (
          <Tabs.Screen
            name={pageName}
            options={
              {
                iconsData: [
                  { iconName, weight: "regular" },
                  { iconName, weight: "fill" },
                ],
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
