import FeaturedCard from "./HomePageUI/FeaturedCard";
import styled from "styled-components/native";
import CompanyLogo from "./CompanyLogo";
import { Text } from "react-native";
import FeaturedFooter from "./HomePageUI/FeaturedFooter";
import FeaturedText from "./HomePageUI/FeaturedText";
import SkillTag from "./SkillTag";

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



const Featured = () => {

    return (
        <FeaturedCard>
            <FeaturedHeaderContaier>
                <CompanyLogo/>
                <FeaturedHeaderTitleContainer>
                    <Text style={{fontSize: 26, fontWeight:'bold'}} >Software Engineer</Text>
                    <Text style={{fontSize:16}}>Meta | Tel - Aviv | Hybrid</Text>
                </FeaturedHeaderTitleContainer>  
            </FeaturedHeaderContaier>
                <FeaturedText title={"Description"}>
                    This is some more text
                    This is some more text
                    This is some more text
                    This is some more text
                    This is some more text
                </FeaturedText>
                
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
