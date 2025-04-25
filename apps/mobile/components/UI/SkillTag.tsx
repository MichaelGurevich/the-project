import React from 'react';
import styled from 'styled-components/native';

interface SkillTagProps {
  /**
   * Name of the skill to display
   */
  skill: string;
  /**
   * Whether the user possesses this skill
   */
  matched: boolean;
}

const TagContainer = styled.View<{ matched: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${({ matched, theme }) =>
    matched ? theme.palette.primary[600] : theme.palette.neutral[300]};
  padding: 4px 8px;
  border-radius: 15px;
  margin: 2px;
  border-width: 2px;
  height: 30px;
  
`;

const TagText = styled.Text<{ matched: boolean }>`
  color: ${({ matched, theme }) =>
    matched ? theme.palette.neutral[900] : theme.palette.neutral[700]};
  font-size: 14px;
  font-weight: ${({ matched }) => (matched ? 500 : 400)};
`;

/**
 * Displays a skill label, highlighted if the user has the skill.
 */
const SkillTag: React.FC<SkillTagProps> = ({ skill, matched }) => (
  <TagContainer matched={matched}>
    <TagText matched={matched}>{skill}</TagText>
  </TagContainer>
);

export default SkillTag;
