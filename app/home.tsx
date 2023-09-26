import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { COLORS, SIZES } from "../constants";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,

          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
