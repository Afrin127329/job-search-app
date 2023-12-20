import { Text, TouchableOpacity } from "react-native";
import styles from "../../components/jobdetails/tabs/tabs.style";
import { tabButtonProps } from "../types";

const TabButton = ({ name, activeTab, onHandleSearchType }: tabButtonProps) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

export default TabButton;
