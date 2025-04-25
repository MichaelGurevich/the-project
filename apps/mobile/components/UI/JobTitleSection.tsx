import React from 'react';
import styled from 'styled-components/native';

interface JobTitleSectionProps {
  /**
   * Main job title text
   */
  title: string;
  /**
   * Array of metadata strings (e.g. company, location, type)
   */
  meta: string[];
}

// Container to stack title and meta vertically
const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

// Title text styling
const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.lg}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
`;

// Meta text styling
const MetaText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: 4px;
`;

/**
 * Displays a job title with metadata below, separated by " | "
 */
const JobTitleSection: React.FC<JobTitleSectionProps> = ({ title, meta }) => (
  <Container>
    <TitleText>{title}</TitleText>
    <MetaText>{meta.join(' | ')}</MetaText>
  </Container>
);

export default JobTitleSection;
