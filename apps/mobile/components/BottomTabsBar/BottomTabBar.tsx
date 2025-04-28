import React from 'react'
import {View, SafeAreaView } from 'react-native'
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

export const BottomTabBar = () => {
    return (
        <BottomTabsContainer>
            <TabBarItem/>
            <TabBarItem/>
            <TabBarItem/>
            <TabBarItem/>
            
        </BottomTabsContainer>
    );
} 