import React from "react";
import styled from "styled-components/native";

type JobTitleSectionProps = {
  text: string[] | string;
  separator?: string;
};

const TextContainer = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: 4px;
`;

export const SectionedTest = ({
  text,
  separator = " | ",
}: JobTitleSectionProps) => {
  let finalText;

  if (Array.isArray(text)) {
    finalText = text.join(separator);
  } else {
    finalText = text;
  }

  return <TextContainer>{finalText}</TextContainer>;
};
