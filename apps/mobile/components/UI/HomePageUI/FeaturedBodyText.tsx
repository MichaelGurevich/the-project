import React from 'react';
import styled from 'styled-components/native';

interface FeaturedBodyTextProps {
  /**
   * Job description text
   */
  description: string;
  /**
   * Job qualification text
   */
  qualification: string;
  /**
   * Maximum lines for description (defaults to 3)
   */
  maxDescriptionLines?: number;
  /**
   * Maximum lines for qualification (defaults to 3)
   */
  maxQualificationLines?: number;
}

// Wrapper for the entire body text section
const Container = styled.View`
  padding: 8px 10px;
`;

// Shared section title styling
const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.lg}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: 8px;
`;

// Shared section body text styling, supports truncation via props
const SectionText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: 4px;
`;

/**
 * Renders the Description and Qualification sections with truncation.
 */
const FeaturedBodyText: React.FC<FeaturedBodyTextProps> = ({
  description,
  qualification,
  maxDescriptionLines = 3,
  maxQualificationLines = 3,
}) => (
  <Container>
    <SectionTitle>Description</SectionTitle>
    <SectionText numberOfLines={maxDescriptionLines} ellipsizeMode="tail">
      {description}
    </SectionText>

    <SectionTitle>Qualification</SectionTitle>
    <SectionText numberOfLines={maxQualificationLines} ellipsizeMode="tail">
      {qualification}
    </SectionText>
  </Container>
);

export default FeaturedBodyText;
