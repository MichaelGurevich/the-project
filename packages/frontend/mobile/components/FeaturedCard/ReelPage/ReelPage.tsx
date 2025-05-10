import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, ScrollView } from "react-native";

import { ReelPageHeader } from "./components/ReelPageHeader";
import { ReelPageSection } from "./components/ReelPageSections";
import { ReelPageFooter } from "./components/ReelPageFooter";

const metaLogo = require("./components/meta-logo.png");
const Root = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const Content = styled(ScrollView).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const ReelPage: React.FC = () => (
  <Root>
    <ReelPageHeader logo={metaLogo} />
    <ReelPageSection
      title="Software Engineer"
      infoRow={{
        location: "Menlo Park, CA",
        jobType: "Full-time",
        whenPosted: "2 days ago",
      }}
      jobInfoText="We are seeking a Software Engineer to join our team and help build inovative products that connect the world."
      items={[
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in software development",
        "Profiency in programming languages such as Java, C++, or Python",
      ]}
    />
    <Content>{/* … */}</Content>
    <ReelPageFooter></ReelPageFooter>
  </Root>
);
