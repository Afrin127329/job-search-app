import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./popularjobs.style";

const PopularJobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopularJobs;
