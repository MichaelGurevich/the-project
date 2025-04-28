import React from 'react'
import { View, SafeAreaView } from 'react-native'
import styled from 'styled-components/native';
import { TabBarItem } from './components/TabBarItem';





const BottomTabsContainer = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #e6e6e6;
  padding-vertical: 8px;
  height: 56px;
`;

const iconSource = require('../../icons/BottomNavBarIcons/tab-icon-home-outline-black.png');


export const BottomTabBar = ({ state, descriptors, navigation }: any) => {
    // console.log(state)
    return (
        <BottomTabsContainer>

            {state.routes.map((route: any, index: number) => {
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


                return (
                    <TabBarItem size={32} source={iconSource} onPress={onPress}/>
                );

            })}



        </BottomTabsContainer>
    );
} 