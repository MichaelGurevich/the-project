import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import type { ImageSourcePropType } from "react-native";
import { BackButton } from "../../../BackButton/BackButton";

const Container = styled.View`
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const CenterRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 25%;
  aspect-ratio: ${80 / 48};
  align-items: center;
`;

interface HeaderProps {
  logo: ImageSourcePropType;
}

export const ReelPageHeader: React.FC<HeaderProps> = ({ logo }) => (
  <Container>
    <BackButton
      onPress={() => {
        /* navigation.goBack() */
      }}
    />
    <Logo source={logo} resizeMode="contain" />
  </Container>
);
