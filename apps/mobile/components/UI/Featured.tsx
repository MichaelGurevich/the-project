import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import FeaturedCard from './HomePageUI/FeaturedCard';
import CompanyLogo from './CompanyLogo';
import JobTitleSection from './JobTitleSection';
import FeaturedBodyText from './HomePageUI/FeaturedBodyText';
import FeaturedFooter from './HomePageUI/FeaturedFooter';
import SkillTag from './SkillTag';

/**
 * Text blocks for description and qualification
 */
export interface JobText {
  description: string;
  qualification: string;
}

/**
 * Props for the Featured component
 */
export interface FeaturedProps {
  jobId: string;
  publishedDate: string;
  companyLogo: ImageSourcePropType;
  title: string;
  companyName: string;
  location: string;
  workLoad: string;
  workMode: string;
  jobText: JobText;
  skills: { skill: string; matched: boolean }[];
}

// Header container for logo and title section
const FeaturedHeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
`;

// Container to center title beside logo
const FeaturedHeaderTitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 8px;
`;

/**
 * Featured card rendering all job details
 */
const Featured: React.FC<FeaturedProps> = ({
  jobId,
  publishedDate,
  companyLogo,
  title,
  companyName,
  location,
  workLoad,
  workMode,
  jobText,
  skills,
}) => (
  <FeaturedCard>
    <FeaturedHeaderContainer>
      <CompanyLogo source={companyLogo} />
      <FeaturedHeaderTitleContainer>
        <JobTitleSection
          title={title}
          meta={[companyName, location, workMode]}
        />
      </FeaturedHeaderTitleContainer>
    </FeaturedHeaderContainer>

    <FeaturedBodyText
      description={jobText.description}
      qualification={jobText.qualification}
    />

    <FeaturedFooter>
      {skills.map((skillItem, idx) => (
        <SkillTag
          key={`${skillItem.skill}-${idx}`}
          skill={skillItem.skill}
          matched={skillItem.matched}
        />
      ))}
    </FeaturedFooter>
  </FeaturedCard>
);

export default Featured;
