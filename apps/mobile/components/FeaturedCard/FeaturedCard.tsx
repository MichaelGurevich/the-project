import React, { ReactElement } from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
import {
  FeaturedCardFooter,
  FeaturedCardFooterProps,
  FeaturedCardSections,
  FeaturedCardSectionsProps,
  FeaturedCardHeader,
  FeaturedCardHeaderProps,
} from "./components";

const FeaturedCardRoot = styled.View`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.background.default};

  /* Android */
  ${Platform.OS === "android" && `elevation: 3;`}

  /* iOS */
  ${Platform.OS === "ios" &&
  `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 3px;
  `}
`;

export type FeaturedCardProps = {
  Header: ReactElement<FeaturedCardHeaderProps>;
  Sections?: ReactElement<FeaturedCardSectionsProps>;
  Footer?: ReactElement<FeaturedCardFooterProps>;
};

export const FeaturedCard = ({
  Footer,
  Sections,
  Header,
}: FeaturedCardProps) => {
  return (
    <FeaturedCardRoot>
      {Header}
      {Sections}
      {Footer}
    </FeaturedCardRoot>
  );
};

FeaturedCard.Sections = FeaturedCardSections;
FeaturedCard.Footer = FeaturedCardFooter;
FeaturedCard.Header = FeaturedCardHeader;
