import React from "react";
import styled from "styled-components/native";
import type { StyleProp, ViewStyle } from "react-native";

interface BulletProps {
  size?: number;            
  color?: string;          
  style?: StyleProp<ViewStyle>;  
}

const Dot = styled.View<{ $size: number; $color: string }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $size }) => $size / 2}px;
  background-color: ${({ $color }) => $color};
`;

export const Bullet: React.FC<BulletProps> = ({
  size = 6,
  color = "#666",
  style,
}) => <Dot $size={size} $color={color} style={style} />;