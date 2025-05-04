// components/Icon.tsx
import React from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType, ViewStyle } from 'react-native';

interface IconProps {
  source: ImageSourcePropType;
  size: number;
  elevation?: number;
}

const IconContainer = styled.View<{
  size: number;
  elevation: number;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  elevation: ${({ elevation }) => elevation};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  background-color: white;
  border-radius: ${({ size }) => size / 2}px;
  overflow: hidden;
`;

const StyledImage = styled.Image<{
  size: number;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  resize-mode: contain;
`;

const Icon: React.FC<IconProps> = ({ source, size, elevation = 0 }) => {
  return (
    <IconContainer size={size} elevation={elevation}>
      <StyledImage source={source} size={size} />
    </IconContainer>
  );
};

export default Icon;
