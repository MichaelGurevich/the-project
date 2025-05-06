import React from 'react';
import styled from "styled-components/native";
import * as PhosphorIcons from 'phosphor-react-native';
import { Pressable, PressableProps, } from 'react-native';


const ICON_DEFAULT_SIZE = 24;
const ICON_DEFAULT_WEIGHT = 'regular';
const ICON_DEFAULT_COLOR = 'black';

export type IconName = keyof typeof PhosphorIcons;

export type IconProps = {
  iconName: IconName;
  size?: number;
  color?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

export const Icon = ({
  iconName,
  size = ICON_DEFAULT_SIZE,
  color = ICON_DEFAULT_WEIGHT,
  weight = ICON_DEFAULT_WEIGHT,
}: IconProps) => {
  const PhosphorIcon = PhosphorIcons[iconName] as React.ComponentType<any>;

  return (
      <PhosphorIcon size={size} color={color} weight={weight} />
  );
};