import FeaturedCard from "./HomePageUI/FeaturedCard";
import styled from "styled-components/native";
import CompanyLogo from "./CompanyLogo";
import { Text } from "react-native";
import FeaturedFooter from "./HomePageUI/FeaturedFooter";


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



const Featured = () => {

    return (
        <FeaturedCard>
            <FeaturedHeaderContaier>
                <CompanyLogo/>
                <FeaturedHeaderTitleContainer>
                    <Text style={{fontSize: 26, fontWeight:'bold'}} >Some text</Text>
                    <Text style={{fontSize:16}}>some other text</Text>
                </FeaturedHeaderTitleContainer>
            </FeaturedHeaderContaier>
            <FeaturedFooter/>
        </FeaturedCard>
    );
};


export default Featured;
