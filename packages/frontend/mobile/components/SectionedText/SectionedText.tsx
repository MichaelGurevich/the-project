import React from "react";
import styled from "styled-components/native";

export type SectionedTextProps = {
  text: string[];
  separator?: string;
};

const TextContainer = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: 4px; 
`;

export const SectionedText = ({
  text,
  separator = " | ",
}: SectionedTextProps) => {
  return <TextContainer>{text.join(separator).toString()}</TextContainer>;
};
