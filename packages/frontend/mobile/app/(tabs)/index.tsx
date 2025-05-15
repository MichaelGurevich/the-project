import React from "react";
import { View } from "react-native";

import { FeaturedTileLayout } from "@/layouts/FeaturedTileLayout";
import { ReelPage } from "@/components/FeaturedCard/ReelPage/ReelPage";
import { JOBS } from "@/mocks/jobs";
import {Icon, IconProps, IconName } from "@/components/Icon";

export default function HomeScreen() {
  return (
    
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FeaturedTileLayout jobList={JOBS} />
        
      </View>
    
  );
}
