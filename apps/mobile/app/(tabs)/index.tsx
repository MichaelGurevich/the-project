import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "@/theme/theme";
import { FeaturedTileLayout } from "@/layouts/FeaturedTileLayout";
import { JOBS } from "@/mocks/jobs";

export default function HomeScreen() {
  return (
    <ThemeProvider theme={lightTheme}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FeaturedTileLayout jobList={JOBS} />
      </View>
    </ThemeProvider>
  );
}
