import styled from "styled-components/native";
import SkillTag from "../SkillTag";

const FooterContainer = styled.View`
    flex-direction: row;    
    flex-wrap: wrap;
    height: 80px;
    width: 100%;
    background-color: white;
    margin-top: auto;
    padding-left: 10px;
    padding-right: 10px;
    `

    interface FeaturedFooterProps {
        /**
         * Children elements, typically SkillTag components
         */
        children: React.ReactNode;
      }

/**
 * Footer for the featured section, rendering SkillTag components
 */
const FeaturedFooter: React.FC<FeaturedFooterProps> = ({ children }) => (
    <FooterContainer>
     {children}
    </FooterContainer>
  );
  
  export default FeaturedFooter;