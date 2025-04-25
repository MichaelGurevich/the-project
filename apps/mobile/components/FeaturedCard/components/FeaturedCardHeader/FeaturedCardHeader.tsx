import { Logo, LogoProps } from "@/components/Logo";
import { SectionedText, SectionedTextProps } from "@/components/SectionedText";
import React from "react";
import styled from "styled-components/native";

export type FeaturedCardHeaderProps = {
  compoanyLogo: LogoProps;
  jobDescription: SectionedTextProps["text"];
  jobTitle: string;
};

const FeaturedHeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
`;

const FeaturedHeaderTitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 8px;
`;

const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.lg}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const FeaturedCardHeader = ({
  compoanyLogo,
  jobDescription,
  jobTitle,
}: FeaturedCardHeaderProps) => {
  return (
    <FeaturedHeaderContainer>
      <Logo {...compoanyLogo} />
      <FeaturedHeaderTitleContainer>
        <TitleText>{jobTitle}</TitleText>
        <SectionedText text={jobDescription} />
      </FeaturedHeaderTitleContainer>
    </FeaturedHeaderContainer>
  );
};
