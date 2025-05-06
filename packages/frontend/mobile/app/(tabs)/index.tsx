import React from "react";
import { View } from "react-native";

import { FeaturedTileLayout } from "@/layouts/FeaturedTileLayout";
import { JOBS } from "@/mocks/jobs";
import {Icon, IconProps, IconName } from "@/components/Icon";

export default function HomeScreen() {
  return (
    
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* <FeaturedTileLayout jobList={JOBS} /> */}
        <Icon
          iconName="House"
          size={32}
          color="black"
          weight="regular"        
        />

      <Icon
          iconName="House"
          size={32}
          color="black"
          weight="fill"  
          onPress = {()=>console.log("hello")};
          }      
        />

        
      </View>
    
  );
}
