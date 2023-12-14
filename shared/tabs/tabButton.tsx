import { Text, TouchableOpacity } from "react-native";
import { tabButtonProps } from "../types";

const TabButton = ({ name, activeTab, onHandleSearchType }: tabButtonProps) => (
  <TouchableOpacity>
    <Text>{name}</Text>
  </TouchableOpacity>
);

export default TabButton;
