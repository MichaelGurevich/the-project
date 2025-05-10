import React from "react";
import { BottomNavigationContainer } from "./BottomNavigationContainer";
import { BottomNavItem } from "./BottomNavItem/BottomNavItem";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { IconProps } from "@/components/Icon";
import { Tabs } from "expo-router";

export type bottomTabBarIconsData = {
  nonFocusedIcon: IconProps;
  focusedIcon: IconProps;
};

export type CustomTabScreenOptions = bottomTabBarIconsData &
  React.ComponentProps<typeof Tabs.Screen>["options"];

export const BottomNavigationBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <BottomNavigationContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const customOptions = options as CustomTabScreenOptions;
        const {focusedIcon, nonFocusedIcon} = customOptions;
        
        return (
          <BottomNavItem
            key={index}
            {...nonFocusedIcon}
            onPress={() => console.log("hello")}
          />
        );
      })}
    </BottomNavigationContainer>
  );
};
