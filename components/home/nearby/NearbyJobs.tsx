import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants";
import { useFetch } from "../../../hooks/useFetch";
import NearbyJobCard from "../../../shared/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";

const NearbyJobs = () => {
  const router = useRouter();
  const { data, loading, err } = useFetch("search", {
    query: "React Developer",
    page: 1,
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : err ? (
          <Text>Something Went Wrong!</Text>
        ) : (
          data?.map((job: any) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
