import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// A styled container mimicking Instagram's bottom navigation bar
export const BottomNavContainer = styled(SafeAreaView).attrs({
  // ensure safe-area padding on devices with notches
  edges: ['bottom'],
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
  elevation: 8;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;

  /* vertical padding for tap targets */
  padding-vertical: 8px;
`;


