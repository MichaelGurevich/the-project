import React from "react";
import styled from "styled-components/native";

export type SectionedTextProps = {
  text: string[] | string;
  seperator?: string;
};

const TextContainer = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: 4px;
`;

export const SectionedText = ({
  text,
  seperator = " | ",
}: SectionedTextProps) => {
  let finaltext;
  if (Array.isArray(text)) {
    finaltext = text.join(seperator);
  }

  return <TextContainer>{finaltext?.split(" ").join(seperator)}</TextContainer>;
};
