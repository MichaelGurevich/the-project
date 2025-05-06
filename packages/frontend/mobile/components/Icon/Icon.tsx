import React from 'react';
import * as PhosphorIcons from 'phosphor-react-native';

export type IconName = keyof typeof PhosphorIcons;

export type IconProps = {
  iconName: IconName;
  size?: number;
  color?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

export const Icon = ({
  iconName,
  size,
  color,
  weight,
}: IconProps) => {
  
  const PhosphorIcon = PhosphorIcons[iconName] as React.ComponentType<any>;

  return (
      <PhosphorIcon size={size} color={color} weight={weight} />
  );
};