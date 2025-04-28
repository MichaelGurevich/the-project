import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native';


const TabsContainer = styled.View`
    height: 100px;
    width: 100%;
    background-color: ${({theme}) => theme.palette.neutral[50]};
    border-color: ${({theme}) => theme.palette.neutral[900]};
    border-width: 2px;

`

export const BottomTabBar = () => {
    return (
        <TabsContainer>

        </TabsContainer>
    );
} 