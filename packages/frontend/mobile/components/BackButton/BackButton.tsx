import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const BackBtn = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px;
`;

export const BackButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <BackBtn onPress={onPress}>
    <Ionicons name="arrow-back" size={24} color="black" />
  </BackBtn>
);
