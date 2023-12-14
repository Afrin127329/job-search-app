import { FlatList, View } from "react-native";
import { SIZES } from "../../../constants";
import TabButton from "../../../shared/tabs/tabButton";
import { tabProps } from "../../../shared/types";
import styles from "./tabs.style";

const Tabs = ({ tabs, setActiveTab, activeTab }: tabProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
