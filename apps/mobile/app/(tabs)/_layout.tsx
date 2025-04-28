import React from 'react';
import styled from 'styled-components/native';
import { Tabs } from 'expo-router';

import { BottomTabBar } from '../../components/BottomTabsBar';
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "@/theme/theme";


const TestView = styled.View`
    height: 100px;
    width: 50px;
    background-color: red;
`



const TabItem = () => {
    return (
        <BottomTabBar>

        </BottomTabBar>
    )

}


export default function TabLayout() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Tabs
                tabBar={props => <BottomTabBar {...props} />}
            >

                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        headerShown: false,
                    }}
                />


                <Tabs.Screen
                    name="Saved"
                    options={{
                        title: 'Saved',
                        headerShown: false,
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                    }}
                />

            </Tabs>
        </ThemeProvider>
    );
}
