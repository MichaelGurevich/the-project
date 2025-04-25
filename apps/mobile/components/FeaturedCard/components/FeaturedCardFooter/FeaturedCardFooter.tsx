import styled from "styled-components/native";
import { Chip, ChipProps } from "../../../Chip";

const FooterContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 80px;
  width: 100%;
  background-color: white;
  margin-top: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

export type FeaturedCardFooterProps = { skills: ChipProps[] };

export const FeaturedCardFooter = ({ skills }: FeaturedCardFooterProps) => (
  <FooterContainer>
    {skills.map((c, index) => (
      <Chip key={`${c.name}-${index}`} {...c} />
    ))}
  </FooterContainer>
);
