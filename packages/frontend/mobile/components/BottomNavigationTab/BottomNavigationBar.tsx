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
        const { focusedIcon, nonFocusedIcon } = customOptions;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <BottomNavItem
            key={index}
            {...nonFocusedIcon}
            onPress={onPress}
          />
        );
      })}
    </BottomNavigationContainer>
  );
};
