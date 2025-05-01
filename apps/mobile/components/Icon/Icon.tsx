import React from 'react';
import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

export type IconProps = {
  size: number,
} & Pick<ImageProps, "source" | "accessibilityLabel" | "borderRadius">;

const IconContainer = styled.View<{size: number, borderRadius?: number}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ borderRadius }) => borderRadius || 0}px;
  justify-content: center;
  align-items: center;
`;

const IconImage = styled.Image.attrs({
  resizeMode: "contain", 
})`
  width: 100%;
  height: 100%;
`;

export const Icon = ({size, ...rest} : IconProps) => {
  const {source, accessibilityLabel, borderRadius} = rest;

  return (
    <IconContainer size={size} borderRadius={borderRadius}>
      <IconImage source={source} accessibilityLabel={accessibilityLabel}/>    
    </IconContainer>
  );
}