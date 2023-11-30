import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./nearbyjobs.style";

const NearbyJobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NearbyJobs;
