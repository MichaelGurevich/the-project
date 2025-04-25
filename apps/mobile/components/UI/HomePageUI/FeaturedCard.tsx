import React from 'react';
import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

const windowHeight = Dimensions.get('window').height;

interface FeaturedCardProps {
  children: React.ReactNode;
}

const FeaturedCard = styled.View`
  flex-direction: column;
  height: ${windowHeight * 0.5}px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.background.default};

  /* Android */
  ${Platform.OS === 'android' && `elevation: 3;`}

  /* iOS */
  ${Platform.OS === 'ios' && `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 3px;
  `}

`;

export default FeaturedCard;
