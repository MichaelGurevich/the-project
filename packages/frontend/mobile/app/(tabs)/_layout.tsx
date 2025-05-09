import React from "react";
import { Tabs } from "expo-router";
import { ThemeProvider, useTheme } from "styled-components/native";
import { lightTheme } from "../../theme/theme";
import { IconContext } from "phosphor-react-native";
import { BottomNavigationBar } from "@/components/BottomNavigationTab";
import { IconProps } from "@/components/Icon";

export type tabIconsData = {
  iconsData: IconProps[];
};

export type CustomTabScreenOptions = tabIconsData &
  React.ComponentProps<typeof Tabs.Screen>["options"];

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
        <Tabs.Screen
          name="index"
          options={
            {
              iconsData: [
                { iconName: "House", weight: "regular" },
                { iconName: "House", weight: "fill" },
              ],
            } as CustomTabScreenOptions
          }
        />
        <Tabs.Screen
          name="Search"
          options={
            {
              iconsData: [
                { iconName: "MagnifyingGlass", weight: "regular" },
                { iconName: "MagnifyingGlass", weight: "fill" },
              ],
            } as CustomTabScreenOptions
          }
        />
        <Tabs.Screen
          name="Discover"
          options={
            {
              iconsData: [
                { iconName: "Compass", weight: "regular" },
                { iconName: "Compass", weight: "fill" },
              ],
            } as CustomTabScreenOptions
          }
        />
        <Tabs.Screen
          name="Saved"
          options={
            {
              iconsData: [
                { iconName: "BookmarkSimple", weight: "regular" },
                { iconName: "BookmarkSimple", weight: "fill" },
              ],
            } as CustomTabScreenOptions
          }
        />
        <Tabs.Screen
          name="Profile"
          options={
            {
              iconsData: [
                { iconName: "User", weight: "regular" },
                { iconName: "User", weight: "fill" },
              ],
            } as CustomTabScreenOptions
          }
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
