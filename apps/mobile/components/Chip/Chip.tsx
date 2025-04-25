import React from "react";
import styled from "styled-components/native";

export type ChipProps = {
  name: string;
  isActive: boolean;
};

const TagContainer = styled.View<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${({ isActive, theme }) =>
    isActive ? theme.palette.primary[600] : theme.palette.neutral[300]};
  padding: 4px 8px; //TODO Theme
  border-radius: 15px; //TODO Theme
  margin: 2px; //TODO Theme
  border-width: 2px;
  height: 30px;
`;

const TagText = styled.Text<{ isActive: boolean }>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.palette.neutral[900] : theme.palette.neutral[700]};
  font-size: 14px; //TODO Theme
  font-weight: ${({ isActive }) => (isActive ? 500 : 400)};
`;

export const Chip = ({ isActive, name }: ChipProps) => (
  <TagContainer isActive={isActive}>
    <TagText isActive={isActive}>{name}</TagText>
  </TagContainer>
);
