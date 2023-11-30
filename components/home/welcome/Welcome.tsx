import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { icons } from "../../../constants";
import styles from "./welcome.style";

const Welcome = () => {
  // const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Afrin</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
