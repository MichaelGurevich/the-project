import React, { useId } from "react";
import styled from "styled-components/native";
import { TextProps, View } from "react-native";

export type Section = {
  title: string;
  content: string;
} & Pick<TextProps, "numberOfLines">;

export type FeaturedCardSectionsProps = {
  sections: Section[];
};

const Container = styled.View`
  padding: 8px 10px;
`;

const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.lg}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: 8px;
`;

const SectionText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: 4px;
`;

export const FeaturedCardSections = ({
  sections,
}: FeaturedCardSectionsProps) => {
  const id = useId();
  return (
    <Container>
      {sections.map(({ title, content, ...rest }) => (
        <View key={`${id} + ${title}`}>
          <SectionTitle>{title}</SectionTitle>
          <SectionText ellipsizeMode="tail" {...rest}>
            {content}
          </SectionText>
        </View>
      ))}
    </Container>
  );
};
