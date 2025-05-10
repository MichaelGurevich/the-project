import React from "react";
import styled from "styled-components/native";
import { Button, Pressable, Platform } from "react-native";
import { TouchableOpacity } from "react-native";

const FooterContainer = styled.View`
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

const Pill = styled.View`
  background-color: black;
  padding: 14px 48px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;


export const ReelPageFooter: React.FC = () => {
  const handleButtonPress = () => {};

  return (
    <FooterContainer>
      <Pressable
        onPress={handleButtonPress}
        android_ripple={{ color: "rgba(255,255,255,0.15)", radius: 999 }}
        style={({ pressed }: { pressed: boolean }) => [
          Platform.OS === "ios" && { opacity: pressed ? 0.7 : 1 },
        ]}
      >
        <Pill>
          <Label>Apply</Label>
        </Pill>
      </Pressable>
    </FooterContainer>
  );
};
