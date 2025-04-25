import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "@/theme/theme";
import { FeaturedTileLayout } from "@/layouts/FeaturedTileLayout";

const longDescription = `We are looking for a highly motivated Software Engineer to join our
team. You will work on building scalable backend services, designing
system architectures, and collaborating closely with frontend developers
to deliver seamless user experiences across our platforms.`;

const longQualification = `• Bachelor’s degree in Computer Science or related field
• 3+ years of professional experience with Node.js or Python
• Hands-on experience with AWS services (Lambda, DynamoDB, S3)
• Strong understanding of RESTful API design principles
• Excellent problem-solving and communication skills`;

const sampleSkills = [
  { skill: "JavaScript", matched: true },
  { skill: "TypeScript", matched: true },
  { skill: "React Native", matched: false },
  { skill: "GraphQL", matched: false },
  { skill: "AWS", matched: true },
  { skill: "Docker", matched: false },
];

const featuredProps = {
  jobId: "12345",
  publishedDate: "2023-10-01",
  companyLogo: { uri: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  title: "Software Engineer",
  companyName: "Meta",
  location: "Tel Aviv",
  workLoad: "Full Time",
  workMode: "Hybrid",
  jobText: {
    description: longDescription,
    qualification: longQualification,
  },
  skills: sampleSkills,
};

export default function HomeScreen() {
  return (
    <ThemeProvider theme={lightTheme}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FeaturedTileLayout {...featuredProps} />
      </View>
    </ThemeProvider>
  );
}
