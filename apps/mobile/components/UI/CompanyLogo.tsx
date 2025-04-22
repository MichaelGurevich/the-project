import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';


interface CompanyLogoProps {
  source?: ImageSourcePropType;
  alt?: string;
  size?: number;
}

const LogoWrapper = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: grey;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px;

  /* Android elevation */
  elevation: 2;

  /* iOS shadow */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
`;

const LogoImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

const CompanyLogo: React.FC<CompanyLogoProps> = ({ source, size = 80, alt }) => (
  <LogoWrapper size={size}>
    <LogoImage source={source} alt={alt || "Image"}/>
  </LogoWrapper>
);

export default CompanyLogo;
