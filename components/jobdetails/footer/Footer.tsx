import { Image, Linking, Text, TouchableOpacity, View } from "react-native";

import { useState } from "react";
import { icons } from "../../../constants";
import styles from "./footer.style";

const Footer = ({ url }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeBtn}
        onPress={() => setPressed(!pressed)}
      >
        <Image
          source={pressed ? icons.heart : icons.heartOutline}
          resizeMode="contain"
          style={pressed ? styles.likedBtnImage : styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
