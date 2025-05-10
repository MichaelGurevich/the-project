import React from "react";
import styled from "styled-components/native";
import { Text, FlatList } from "react-native";
import { Bullet } from "../../../Bullet/Bullet";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
  flex-direction: column;
`;

const Title = styled.Text`
  font-size: 40px;
  align-self: center;
  font-weight: 900;
`;

const InfoRowContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;

const Separator = styled.Text`
  font-size: 14px;
  color: #666;
  margin-left: 8px;
  margin-right: 8px;
`;

const JobInfoQualContainer = styled.View`
  margin-top: 40px;
  flex-direction: column;
  margin-left: 30px;
  color: black;
`;

const JobInfoQual = styled.Text`
  font-size: 17px;
  margin-top: 10px;
`;

const JobInfoQualHead = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
`;

const SectionBullet = styled(Bullet).attrs({
  size: 8,
  color: "#444",
})`
  margin-top: 6px;
  margin-right: 10px;
`;

const BulletText = styled.Text`
  font-size: 16px;
  line-height: 20px;
  flex-shrink: 1;
`;

interface InfoRowProps {
  location: string;
  jobType: string;
  whenPosted: string;
}
export const InfoRow: React.FC<InfoRowProps> = ({
  location,
  jobType,
  whenPosted,
}) => (
  <InfoRowContainer>
    <InfoText>{location}</InfoText>
    <Separator>•</Separator>
    <InfoText>{jobType}</InfoText>
    <Separator>•</Separator>
    <InfoText>{whenPosted}</InfoText>
  </InfoRowContainer>
);

export const JobInfoText: React.FC<{ text: string }> = ({ text }) => (
  <>
    <JobInfoQualContainer>
      <JobInfoQualHead>About the Job</JobInfoQualHead>
      <JobInfoQual>{text}</JobInfoQual>
    </JobInfoQualContainer>
  </>
);

 interface JobQualTextProps {
  items: string[];
}

export const JobQualText: React.FC<JobQualTextProps> = ({ items }) => (
  <JobInfoQualContainer>
    <JobInfoQualHead>Qualifications</JobInfoQualHead>
    {items.map((line, idx) => (
      <Row key={idx}>
        <SectionBullet />
        <BulletText>{line}</BulletText>
      </Row>
    ))}
  </JobInfoQualContainer>
);
interface ReelPageSectionsProps {
  title: string;
  infoRow: InfoRowProps;
  items: string[];
  jobInfoText: string;
}

export const ReelPageSection: React.FC<ReelPageSectionsProps> = ({
  title,
  infoRow,
  jobInfoText,
  items,
}) => (
  <Container>
    <Title>{title}</Title>
    <InfoRow {...infoRow}></InfoRow>
    <JobInfoText text={jobInfoText}></JobInfoText>
    <JobQualText items={items}></JobQualText>
  </Container>
);
