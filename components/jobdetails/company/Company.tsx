import React from "react";
import { Image, Text, View } from "react-native";

// import { icons } from "../../../constants";
import { checkImageURL } from "../../../shared/checkImageURL";
import { companyProps } from "../../../shared/types";
import styles from "./company.style";

const Company = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
}: companyProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
        />
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default Company;
