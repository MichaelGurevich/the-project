import React from 'react';
import styled from 'styled-components/native'
import { Icon, IconProps } from '../../Icon';
import { PressableProps } from 'react-native';

const BottomNavItemContainer = styled.Pressable`
    display: flex;
    align-item: center;
    justify-content: center;
`
export type BottomNavItemProps = {
    onPress: PressableProps["onPress"]
} & IconProps;


export const BottomNavItem = ({ onPress, iconName, size, color, weight }: BottomNavItemProps) => {
    return (
        <BottomNavItemContainer onPress={onPress}>
            <Icon
                iconName={iconName}
                size={size}
                color={color}
                weight={weight} />
        </BottomNavItemContainer>
    );
}