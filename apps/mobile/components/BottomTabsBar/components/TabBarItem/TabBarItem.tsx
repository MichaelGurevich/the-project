import React from 'react';
import styled from 'styled-components/native';
import { Pressable, Text } from 'react-native';

const TabBarItemContainer = styled(Pressable)`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
  background-color: red;
`;

export const TabBarItem = () => (
    <TabBarItemContainer>
        <Text>Home </Text>
    </TabBarItemContainer>
);
