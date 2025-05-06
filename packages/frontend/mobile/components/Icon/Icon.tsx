import React from 'react';
import styled from "styled-components/native";
import * as PhosphorIcons from 'phosphor-react-native';
import { Pressable, PressableProps, } from 'react-native';

export type IconName = keyof typeof PhosphorIcons;

export type IconProps = {
  iconName: IconName;
  size?: number;
  color?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
} & Pick<PressableProps, 'onPress'>;

export const Icon = ({
  iconName,
  size = 24,
  color = 'black',
  weight = 'regular',
  ...rest
}: IconProps) => {
  const PhosphorIcon = PhosphorIcons[iconName] as React.ComponentType<any>;

  return (
    <Pressable {...rest}>
      <PhosphorIcon size={size} color={color} weight={weight} />
    </Pressable>
  );
};