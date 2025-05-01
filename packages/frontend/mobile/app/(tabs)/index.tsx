import React from "react";
import { View } from "react-native";

import { FeaturedTileLayout } from "@/layouts/FeaturedTileLayout";
import { JOBS } from "@/mocks/jobs";

export default function HomeScreen() {
  return (
    
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FeaturedTileLayout jobList={JOBS} />
      </View>
    
  );
}
