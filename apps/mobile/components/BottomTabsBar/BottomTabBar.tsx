import React from 'react'
import { SafeAreaView, ImageSourcePropType } from 'react-native'
import styled from 'styled-components/native';
import { TabBarItem } from './components/TabBarItem';

const ICON_SIZE = 26;

export type BottomTabsIconsData = {
    pageName: string,
    iconSource: ImageSourcePropType;
    focusedIconSource: ImageSourcePropType;
}

export type BottomTabBarProps = {
    iconsData: BottomTabsIconsData[],
    state: any,
    descriptors: any,
    navigation: any,
}

const BottomTabsContainer = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: ${({theme})=>(theme.palette.neutral[300])};
  padding-vertical: 8px;
  height: 56px;
`;

export const BottomTabBar = ({ state, descriptors, navigation, iconsData }: BottomTabBarProps) => {
    
    return (
        <BottomTabsContainer>
            {state.routes
            // Extra route is added by default by expo, fileter only the actuall routes
            .filter((route: any) => iconsData.some(item => item.pageName === route.name))
            .map((route: any, index: number) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const tabData = iconsData.find(item => item.pageName === route.name);
                
                return (
                    <TabBarItem 
                        key={route.key}
                        size={ICON_SIZE} 
                        source={isFocused ? tabData?.focusedIconSource : tabData?.iconSource} 
                        onPress={onPress} 
                    />
                );
            })}
        </BottomTabsContainer>
    );
}