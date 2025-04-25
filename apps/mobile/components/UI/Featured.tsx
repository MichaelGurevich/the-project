import FeaturedCard from "./HomePageUI/FeaturedCard";
import styled from "styled-components/native";
import CompanyLogo from "./CompanyLogo";
import { Text } from "react-native";
import FeaturedFooter from "./HomePageUI/FeaturedFooter";
import FeaturedText from "./HomePageUI/FeaturedText";
import SkillTag from "./SkillTag";
import JobTitleSection from "./JobTitleSection";

const FeaturedHeaderContaier = styled.View`
    flex-direction: row;    
    height: 100px;
    width: 100%;
    background-color: white;

    `

const FeaturedHeaderTitleContainer = styled.View`
    flex: 1;
    flex-direction: column;
    WIdth: 100%;
    height: 100%;
    justify-content: center;    
`

const sampleSkills = [
    { skill: 'JavaScript', matched: true },
    { skill: 'TypeScript', matched: true },
    { skill: 'React Native', matched: false },
    { skill: 'GraphQL', matched: false },
    { skill: 'AWS', matched: true },
    { skill: 'Docker', matched: false },
  ];


interface jobDescription  {
    title: string,
    body: string,
}

interface FeaturedProps {
    jobId: string,
    publishedDate: string,
    companyLogo: string,
    title: string,
    complanyName: string
    location: string,
    workLoad: string,
    workMode: string,
    description: jobDescription,
}


const longDescription = `We are looking for a highly motivated Software Engineer to join our
team. You will work on building scalable backend services, designing
system architectures, and collaborating closely with frontend developers
to deliver seamless user experiences across our platforms.`;

const longQualification = `• Bachelor’s degree in Computer Science or related field
• 3+ years of professional experience with Node.js or Python
• Hands-on experience with AWS services (Lambda, DynamoDB, S3)
• Strong understanding of RESTful API design principles
• Excellent problem-solving and communication skills`;


const Featured = () => {

    return (
        <FeaturedCard>
            <FeaturedHeaderContaier>
                <CompanyLogo 
                source={{uri:"https://pngimg.com/uploads/meta/meta_PNG12.png"}}/>
                <FeaturedHeaderTitleContainer>
                    <JobTitleSection
                        title={"Software Engineer"}
                        meta={["Meta", "Tel - Aviv", "Hybrid"]}
                    />
                </FeaturedHeaderTitleContainer>  
            </FeaturedHeaderContaier>

                <FeaturedText
                    description={longDescription}
                    qualification={longQualification}
                />
                
            <FeaturedFooter>
                {sampleSkills.map((skill, index) => {
                    return (
                        <SkillTag key={index} skill={skill.skill} matched={skill.matched} />
                    )
                })}
            </FeaturedFooter>
        </FeaturedCard>
    );
};


export default Featured;
