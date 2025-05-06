import React from 'react';
import styled from 'styled-components/native';
import { Tabs } from 'expo-router';

//import { BottomTabBar } from '../../components/BottomTabsBar';
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "../../theme/theme";

import { IconContext, IconProps } from 'phosphor-react-native';

const ICON_DEFAULT_STYLE:IconProps = 
{
    size: 24,
    color: 'black',
    weight: 'regular'
} 

export default function TabLayout() {
    return (
        <IconContext.Provider 
            value={{
                ...ICON_DEFAULT_STYLE
            }}
        >
            <ThemeProvider theme={lightTheme}>
            <Tabs
                //tabBar={props => <TabItem />}
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

            </Tabs>
        </ThemeProvider>

        </IconContext.Provider>
        
    );
}
