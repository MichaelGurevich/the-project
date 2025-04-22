import FeaturedCard from "./UI/HomePageUI/FeaturedCard";
import styled from "styled-components/native";
import CompanyLogo from "./UI/CompanyLogo";


const FeaturedHeaderContaier = styled.View`
    flex-direction: row;    
    height: 100px;
    width: 100%;
    background-color: white;

    `

const Featured = () => {

    return (
        <FeaturedCard>
            <FeaturedHeaderContaier>
                <CompanyLogo/>
            </FeaturedHeaderContaier>
        </FeaturedCard>
    );
};


export default Featured;
