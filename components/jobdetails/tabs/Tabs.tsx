import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./tabs.style";
// import { SIZES } from '../../../constants';
import { tabButtonProps, tabProps } from "../../../shared/types";

const TabButton = ({ name, activeTab, onHandleSearchType }: tabButtonProps) => (
  <TouchableOpacity>
    <Text>{name}</Text>
  </TouchableOpacity>
);

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
      />
    </View>
  );
};

export default Tabs;
