import React from "react";
import styled from "styled-components/native";

interface FeaturedBodyProps {
  title: string;
  children: React.ReactNode;
}

const FeaturedBodyTextTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 10px 10px 0 10px;
`;

const FeaturedBodyText = styled.Text`
  font-size: 18px;
  margin: 10px 10px 0 16px;
`;

const FeaturedText: React.FC<FeaturedBodyProps> = ({ title, children }) => {
  return (
    <>
      <FeaturedBodyTextTitle>
        {title}
      </FeaturedBodyTextTitle>
      <FeaturedBodyText>
        {children}
      </FeaturedBodyText>
    </>
  );
};

export default FeaturedText;
