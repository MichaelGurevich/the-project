import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

interface CompanyLogoProps {
  /**
   * Source for the logo image
   */
  source: ImageSourcePropType;
  /**
   * Accessibility label for the image
   */
  alt?: string;
  /**
   * Diameter of the logo circle (in pixels)
   */
  size?: number;
}

// Wrapper with circular shape and platform-specific shadows/elevation
const LogoWrapper = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: white;
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

// Image fills wrapper, covers aspect
const LogoImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

/**
 * Displays a company logo inside a circular container.
 * Requires a `source` prop; `alt` maps to accessibilityLabel.
 */
const CompanyLogo: React.FC<CompanyLogoProps> = ({ source, alt, size = 80 }) => (
  <LogoWrapper size={size}>
    <LogoImage source={source} accessibilityLabel={alt} />
  </LogoWrapper>
);

export default CompanyLogo;
