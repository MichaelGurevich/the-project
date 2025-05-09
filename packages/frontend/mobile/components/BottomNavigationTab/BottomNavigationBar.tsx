import React from "react";
import styled from "styled-components/native";
import { BottomNavigationContainer } from "./BottomNavigationContainer";
import { BottomNavItem } from "./BottomNavItem/BottomNavItem";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {CustomTabScreenOptions} from '../../app/(tabs)/_layout';

type CustomTabOptions = CustomTabScreenOptions & {
  iconsData?: { iconName: string; weight?: string }[];
};

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
        console.log(options);

        return (
          <BottomNavItem
            iconName={customOptions?.iconsData?.[0].iconName ?? "House"}
            onPress={() => console.log("hello")}
          />
        );
      })}
    </BottomNavigationContainer>
  );
};
