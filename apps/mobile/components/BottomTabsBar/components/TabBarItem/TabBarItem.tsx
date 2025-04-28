import React from 'react';
import styled from 'styled-components/native';
import { Pressable, PressableProps } from 'react-native';
import { Icon, IconProps } from '../../../Icon';

// Merge Icon props and Pressable props cleanly
export type TabBarItemProps = IconProps & Pick<PressableProps, 'onPress'>;

const TabBarItemContainer = styled(Pressable)`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
  background-color: #fff;
`;

export const TabBarItem = ({ size, onPress, ...rest }: TabBarItemProps) => (
  <TabBarItemContainer onPress={onPress}>
    <Icon size={size} {...rest} />
  </TabBarItemContainer>
);
