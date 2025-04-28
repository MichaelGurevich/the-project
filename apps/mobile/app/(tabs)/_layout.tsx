import React from 'react';
import styled from 'styled-components/native';
import { Tabs } from 'expo-router';

import { BottomTabBar, BottomTabsIconsData } from '../../components/BottomTabsBar';
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "@/theme/theme";







const data: BottomTabsIconsData[] = [
    {
        pageName: "index",
        iconSource: require('@/icons/BottomNavBarIcons/tab-icon-home-outline-black.png'),
        focusedIconSource: require('@/icons/BottomNavBarIcons/tab-icon-home-filled-turquoise.png')
    },
    {
        pageName: "Search",
        iconSource: require('@/icons/BottomNavBarIcons/tab-icon-search-outline-black.png'),
        focusedIconSource: require('@/icons/BottomNavBarIcons/tab-icon-search-outline-turquoise.png')
    },
    {
        pageName: "Discover",
        iconSource: require('@/icons/BottomNavBarIcons/tab-icon-compass-outline-black.png'),
        focusedIconSource: require('@/icons/BottomNavBarIcons/tab-icon-compass-filled-turquoise.png')
    },
    {
        pageName: "Saved",
        iconSource: require('@/icons/BottomNavBarIcons/tab-icon-bookmark-outline-black.png'),
        focusedIconSource: require('@/icons/BottomNavBarIcons/tab-icon-bookmark-filled-turquoise.png')
    },
    
    {
        pageName: "Profile",
        iconSource: require('@/icons/BottomNavBarIcons/tab-icon-profile-outline-black.png'),
        focusedIconSource: require('@/icons/BottomNavBarIcons/tab-icon-profile-filled-turquoise.png')
    },
    
]



export default function TabLayout() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Tabs
               
                tabBar={props => <BottomTabBar {...props} iconsData={data} />}
            >

                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        headerShown: false,
                    }}
                />

                <Tabs.Screen
                    name="Search"
                    options={{
                        title: 'Search',
                        headerShown: false,
                    }}
                />

                <Tabs.Screen
                    name="Discover"
                    options={{
                        title: 'Discover',
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
                    name="Profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                    }}
                />

            </Tabs>
        </ThemeProvider>
    );
}
