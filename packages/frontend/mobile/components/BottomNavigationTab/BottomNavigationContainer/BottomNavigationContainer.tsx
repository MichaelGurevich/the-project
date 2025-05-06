import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

// A styled container mimicking Instagram's bottom navigation bar
export const BottomNavigationContainer = styled(SafeAreaView).attrs({
  // ensure safe-area padding on devices with notches
  edges: ["bottom"],
})`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 56px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.palette.background.paper};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.palette.neutral[400]};

  /* Elevation/shadow for a subtle top border shadow */
  ${({ theme }) =>
    Platform.select({
      ios: `
        shadow-color: ${theme.themeElevation.low.shadowColor};
        shadow-offset: ${theme.themeElevation.low.shadowOffset.width}px ${theme.themeElevation.low.shadowOffset.height}px;
        shadow-opacity: ${theme.themeElevation.low.shadowOpacity};
        shadow-radius: ${theme.themeElevation.low.shadowRadius}px;
      `,
      android: `
        elevation: ${theme.themeElevation.low.elevation};
      `,
    })}/* vertical padding for tap targets */
`;
